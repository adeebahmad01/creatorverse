import {
  Button,
  IconButton,
  makeStyles,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableFooter,
  TableHead,
  TablePagination,
  TableRow,
  Typography,
} from "@material-ui/core";
import {
  Check,
  Close,
  KeyboardArrowDown,
  KeyboardArrowUp,
} from "@material-ui/icons";
import React, { useEffect, useState } from "react";
import firebase, { db } from "../../config/Firebase";
import { useData } from "../../context/DataContext";
import { useHandling } from "../../context/HandleContext";
import TablePaginationActions from "../utils/TablePaginationActions";
import Box from "@material-ui/core/Box";
import Collapse from "@material-ui/core/Collapse";
import Popup from "./Popup";
const useStyles = makeStyles({
  table: {
    minWidth: 500,
  },
});

const TableRowCell = ({ row, i, fields, setPopupOpen }) => {
  const [open, setOpen] = useState(false);
  const { values = [], ...data } = useData();
  return (
    <>
      <TableRow key={i}>
        <TableCell>
          <IconButton size="small" onClick={() => setOpen(!open)}>
            {open ? <KeyboardArrowUp /> : <KeyboardArrowDown />}
          </IconButton>
        </TableCell>
        <TableCell className="font-weight-bold">{i + 1}</TableCell>
        {fields.map((el, i) => (
          <TableCell key={i} className="font-weight-bold">
            {row[el]}
          </TableCell>
        ))}
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box margin={1}>
              <Typography variant="h5" gutterBottom component="div">
                Levels
              </Typography>
              <Table size="small" aria-label="purchases">
                <TableHead>
                  <TableRow>
                    <TableCell>Level</TableCell>
                    <TableCell>Completed</TableCell>
                    <TableCell>Approved</TableCell>
                    <TableCell>Image</TableCell>
                    <TableCell>Approve Level</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {values.map((el, _i) => {
                    return (
                      <TableRow key={_i}>
                        <TableCell>{el}</TableCell>
                        <TableCell>
                          {row[el]?.completed ? <Check /> : <Close />}
                        </TableCell>
                        <TableCell>
                          {row[el]?.approved ? <Check /> : <Close />}
                        </TableCell>
                        <TableCell>
                          {row[el]?.image && (
                            <Button
                              onClick={() =>
                                setPopupOpen([
                                  {
                                    src: row[el]?.image,
                                    type: "image",
                                  },
                                ])
                              }
                            >
                              Preview
                            </Button>
                          )}
                        </TableCell>
                        <TableCell>
                          {row[el] && !row[el].approved && (
                            <Button
                              onClick={() =>
                                db
                                  .collection("users")
                                  .doc(row.uid)
                                  .update({
                                    [`${el}.approved`]: true,
                                    points:
                                      firebase.firestore.FieldValue.increment(
                                        +data[el].points
                                      ),
                                    currentLevel: +el.split("_")[1],
                                  })
                              }
                            >
                              Approve
                            </Button>
                          )}
                        </TableCell>
                      </TableRow>
                    );
                  })}
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </>
  );
};

const TableWrapper = ({ rows = [], fields = [], setPopupOpen }) => {
  const [page, setPage] = useState(0);
  const classes = useStyles();
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const emptyRows =
    rowsPerPage - Math.min(rowsPerPage, rows.length - page * rowsPerPage);

  const handleChangePage = (_event, newPage) => {
    setPage(newPage);
  };
  console.log(rowsPerPage > 0 ? rows : rows);
  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };
  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="custom pagination table">
        <TableHead>
          <TableRow>
            <TableCell />
            <TableCell className="font-weight-bold">Sr #</TableCell>
            {fields.map((el, i) => (
              <TableCell key={i} className="font-weight-bold">
                {el}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {(rowsPerPage > 0
            ? rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
            : rows
          ).map((row, i) => (
            <TableRowCell {...{ row, i, fields, setPopupOpen }} />
          ))}

          {emptyRows > 0 && (
            <TableRow style={{ height: 53 * emptyRows }}>
              <TableCell colSpan={6} />
            </TableRow>
          )}
        </TableBody>
        <TableFooter>
          <TableRow>
            <TablePagination
              rowsPerPageOptions={[5, 10, 25, { label: "All", value: -1 }]}
              colSpan={6}
              count={rows.length}
              rowsPerPage={rowsPerPage}
              page={page}
              SelectProps={{
                inputProps: { "aria-label": "rows per page" },
                native: true,
              }}
              onChangePage={handleChangePage}
              onChangeRowsPerPage={handleChangeRowsPerPage}
              ActionsComponent={TablePaginationActions}
            />
          </TableRow>
        </TableFooter>
      </Table>
    </TableContainer>
  );
};

const Users = () => {
  const [users, setUsers] = useState([]);
  const [loading, setloading] = useState(false);
  const [popupOpen, setPopupOpen] = useState(false);
  const { setError } = useHandling();
  useEffect(() => {
    const fetchUsers = () =>
      db.collection("users").onSnapshot(
        (d) => {
          const users = d.docs.map((el) => el.data());
          setUsers(users);
          setloading(true);
        },
        (e) => {
          setError(e);
        }
      );
    const unsub = fetchUsers();
    return () => unsub();
  }, []);
  const fields = ["username", "email"];
  return (
    <div>
      <div className="container pt-5 mt-5">
        <TableWrapper
          setPopupOpen={setPopupOpen}
          rows={users}
          fields={fields}
        />
        <Popup
          handleClose={() => setPopupOpen(false)}
          open={popupOpen?.length && true}
          images={popupOpen}
        />
      </div>
    </div>
  );
};

export default Users;
