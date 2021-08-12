import React from "react";
import { useData } from "../../context/DataContext";
import { useAuth } from "../../context/AuthContext";
import { Link } from "react-router-dom";
import VisibilityIcon from "@material-ui/icons/Visibility";
import { Add as CreateIcon } from "@material-ui/icons";
import {
  Button,
  ButtonGroup,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@material-ui/core";
const Dashboard = () => {
  const { components, values, pages } = useData();
  const { logout } = useAuth();
  return (
    <div>
      <div className="container py-5">
        <TableContainer component={Paper}>
          <Table aria-label="collapsible table">
            <TableHead>
              <TableRow>
                <TableCell> Sr # </TableCell>
                <TableCell>Go To</TableCell>
                <TableCell>Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell colSpan={3}>
                  <h3>Values</h3>
                </TableCell>
              </TableRow>
              {values.map((el, i) => {
                return (
                  <TableRow>
                    <TableCell component="th"> {i + 1} </TableCell>
                    <TableCell className="text-capitalize">
                      {" "}
                      {el.split("_").join(" ")}{" "}
                    </TableCell>
                    <TableCell>
                      <ButtonGroup className="btn-group">
                        {/* Button to Delete the Exercise */}
                        <Button
                          variant="contained"
                          component={Link}
                          to={`/panel/${el}/preview`}
                          color="primary"
                        >
                          <VisibilityIcon />
                        </Button>
                        <Button
                          color="inherit"
                          variant="contained"
                          component={Link}
                          to={`/panel/${el}/create`}
                        >
                          <CreateIcon />
                        </Button>
                      </ButtonGroup>
                    </TableCell>
                  </TableRow>
                );
              })}
              <TableRow>
                <TableCell component="th"> {values.length + 1} </TableCell>
                <TableCell className="text-capitalize">
                  Active Presales
                </TableCell>
                <TableCell>
                  <ButtonGroup className="btn-group">
                    {/* Button to Delete the Exercise */}
                    <Button
                      variant="contained"
                      component={Link}
                      to="/dashboard/activePresales"
                      color="primary"
                    >
                      <VisibilityIcon />
                    </Button>
                  </ButtonGroup>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
        <div className="my-2">
          <Button onClick={logout} color="primary" variant="contained">
            Logout
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
