import React from "react";
import rewards from "../../JSON/rewards.json";
import RewardCard from "./../utils/RewardCard";

const SuggestReward = () => {
  return (
    <div className="py-5">
      <div className="container">
        <div className="row">
          <div className="col-lg-2">
            <svg
              data-name="Group 3"
              xmlns="http://www.w3.org/2000/svg"
              width="100%"
              viewBox="0 0 233 233"
            >
              <defs>
                <clipPath id="a">
                  <rect width={233} height={233} rx={20} fill="#96aac5" />
                </clipPath>
                <clipPath id="b">
                  <path
                    data-name="Clip 2"
                    d="M0 0h787.341v422.649H0z"
                    transform="translate(0 .018)"
                    fill="none"
                  />
                </clipPath>
              </defs>
              <rect
                data-name="Mask"
                width={233}
                height={233}
                rx={20}
                fill="#96aac5"
              />
              <g data-name="Group 3" clipPath="url(#a)">
                <path
                  data-name="Clip 2"
                  d="M0 0h787.341v422.649H0z"
                  transform="translate(-277 -119) translate(0 .018)"
                  fill="none"
                />
                <g
                  data-name="Group 3"
                  clipPath="url(#b)"
                  transform="translate(-277 -119)"
                >
                  <path
                    data-name="Fill 1"
                    d="M181.814 422.65h-.041a5.846 5.846 0 01-4.161-1.736 5.648 5.648 0 01.107-8.052 5.832 5.832 0 014.092-1.681h.059a5.573 5.573 0 013.942 1.685 5.972 5.972 0 01.029 8.188 5.61 5.61 0 01-4.027 1.596zm545.334-3.659a7.1 7.1 0 01-.724-2.251v-.008c-.047-.235-.095-.478-.151-.712l-.237-.985c-.514-2.13-1.045-4.331-1.448-6.521a4.287 4.287 0 00-1-2.251 3.825 3.825 0 00-2.251-1.073c-2.1-.353-4.207-.876-6.244-1.381-.6-.149-1.277-.317-1.928-.473-.127-.03-.259-.058-.387-.085h-.005a4.219 4.219 0 01-1.87-.747 6.51 6.51 0 012.428-.815c.287-.054.556-.1.824-.17q.618-.153 1.235-.31l.041-.01c1.805-.457 3.672-.929 5.535-1.221 2.191-.341 3.3-1.464 3.7-3.756.364-2.076.879-4.163 1.378-6.18v-.005l.011-.043c.158-.639.321-1.3.477-1.951.03-.124.05-.249.071-.38a1.8 1.8 0 01.682-1.348 5.094 5.094 0 01.669 1.979c.042.225.085.455.139.679v.012c.641 2.653 1.3 5.4 1.856 8.171a2.984 2.984 0 002.572 2.591c2.309.492 4.646 1.038 6.906 1.565l1.721.4c.152.035.31.066.463.1a3.262 3.262 0 011.7.683 1.366 1.366 0 01-1.221.654 3.82 3.82 0 00-.413.068l-.72.176c-2.656.65-5.4 1.323-8.13 1.86a3.245 3.245 0 00-2.9 2.827c-.448 2.217-.979 4.451-1.492 6.611-.2.841-.427 1.793-.638 2.705-.021.091-.039.184-.057.275a2.378 2.378 0 01-.588 1.326zM32.8 417.986l-.2-.021-.05-.005-.246-.026a106.12 106.12 0 00-.475-1.918c-.366-1.442-.745-2.931-.973-4.417-.354-2.3-1.453-3.43-3.675-3.767a47.026 47.026 0 01-4.74-1.055c-.8-.2-1.618-.416-2.508-.628a18.739 18.739 0 013.8-1.118h.007c.489-.1.951-.2 1.411-.323l.4-.107.038-.01a15.129 15.129 0 012.06-.453c1.8-.224 2.757-1.213 3.092-3.208.245-1.458.616-2.919.974-4.331v-.019l.221-.876c.03-.121.049-.25.069-.374a1.527 1.527 0 01.529-1.124 1.4 1.4 0 01.667 1.2v.008c.02.122.041.247.07.365l.077.311.077.311v.009c.41 1.649.835 3.355 1.157 5.049a2.953 2.953 0 002.572 2.6c1.675.345 3.368.753 5 1.148h.012l1.112.268c.09.021.186.037.278.052a1.186 1.186 0 01.975.534 2.048 2.048 0 01-1.393.63 6.406 6.406 0 00-.455.088c-2.085.5-3.969.955-5.9 1.376a2.553 2.553 0 00-2.134 2.163c-.356 1.675-.762 3.364-1.155 5l-.164.684c-.108.456-.24.909-.368 1.347-.057.2-.123.421-.183.637zm449.26-6.06c-.695-.143-.766-.607-.828-1.016a3.095 3.095 0 00-.05-.275l-.1-.408c-.445-1.794-.9-3.65-1.253-5.5a3.049 3.049 0 00-2.714-2.725c-1.532-.285-3.074-.659-4.564-1.021-.484-.117-1.033-.251-1.56-.375a2.978 2.978 0 01-1.507-.773c.707-.168 1.417-.348 2.1-.522 1.586-.4 3.226-.817 4.861-1.093a3.889 3.889 0 003.586-3.587 38.518 38.518 0 011.742-6.957 18.1 18.1 0 011.091 3.76v.01c.094.453.182.88.29 1.309.181.726.314 1.327.432 1.857.656 2.955.656 2.955 4.391 3.778h.007c.34.075.711.156 1.116.248a19.78 19.78 0 014.85 1.613c-.69.163-1.387.34-2.061.511-1.529.388-3.108.789-4.683 1.044a3.914 3.914 0 00-3.681 3.759 40.944 40.944 0 01-.974 4.4c-.166.638-.338 1.3-.5 1.959zm-153.105-.172a2.255 2.255 0 01-1.554-.634 2.371 2.371 0 01-.737-1.542 2.4 2.4 0 01.587-1.748 2.271 2.271 0 011.587-.789h.126a2.363 2.363 0 011.642 4.007 2.282 2.282 0 01-1.636.71zm-83.1-28.971a2.549 2.549 0 01-.843-1.73 8.875 8.875 0 00-.086-.431l-.258-1.093-.019-.08c-.542-2.3-1.1-4.672-1.578-7.026a3.107 3.107 0 00-2.765-2.693c-2.479-.509-4.982-1.108-7.4-1.687l-.079-.019q-1.032-.247-2.065-.492a3.01 3.01 0 00-.3-.049.985.985 0 01-.923-.532 2.506 2.506 0 011.456-.6H231c.144-.026.292-.052.436-.085.783-.181 1.578-.37 2.347-.553l.033-.008h.005c1.971-.47 4.009-.955 6.031-1.343a3.641 3.641 0 003.329-3.279c.334-1.915.809-3.838 1.269-5.7l.006-.023c.163-.661.332-1.345.492-2.018.037-.157.069-.318.1-.474a4.205 4.205 0 01.7-1.837 1.98 1.98 0 01.748 1.458c.021.113.044.24.072.358l.323 1.37c.563 2.382 1.144 4.844 1.644 7.283a3.115 3.115 0 002.73 2.733c2.141.434 4.3.946 6.39 1.441.768.182 1.638.389 2.477.583.148.034.3.063.443.088a2.772 2.772 0 011.5.6 1.413 1.413 0 01-1.221.607 3.777 3.777 0 00-.448.071q-.867.211-1.733.426c-2.328.575-4.735 1.169-7.13 1.624a3.511 3.511 0 00-3.106 3.21c-.343 1.834-.787 3.682-1.217 5.468v.008c-.178.742-.363 1.509-.538 2.264-.026.111-.05.224-.074.336a3.829 3.829 0 01-.747 1.822zm397.432-11.043a3.519 3.519 0 01-2.419-.926 3.478 3.478 0 01-.158-4.856 3.448 3.448 0 012.477-1.095h.077a3.528 3.528 0 013.594 3.388 3.289 3.289 0 01-.929 2.395 3.627 3.627 0 01-2.612 1.094zm-551.966-1.03c-.064 0-.129 0-.2-.005a3.572 3.572 0 01-3.325-3.53 3.476 3.476 0 011.052-2.422 3.552 3.552 0 012.476-1.077h.091a3.575 3.575 0 012.5 1.186 3.445 3.445 0 01.941 2.49 3.559 3.559 0 01-1.107 2.391 3.521 3.521 0 01-2.428.967zm317.282-7.9a2.421 2.421 0 01-1.746-.715 2.163 2.163 0 01-.629-1.565 2.3 2.3 0 012.376-2.208h.13a2.243 2.243 0 01-.072 4.484zm147.945-1.367a2.457 2.457 0 01-1.757-.725 2.163 2.163 0 01-.623-1.578 2.317 2.317 0 012.287-2.2h.1a2.176 2.176 0 012.262 2.307 2.144 2.144 0 01-2.229 2.2zm181.6-17.435h-.115a2.252 2.252 0 01-2.128-2.33 2.369 2.369 0 012.271-2.377h.09a2.3 2.3 0 012.114 2.357 2.39 2.39 0 01-.683 1.711 2.174 2.174 0 01-1.554.644zm-580.819-1.277h-.061a3.873 3.873 0 01-2.795-1.15 3.965 3.965 0 01-1.026-2.917 3.715 3.715 0 013.879-3.722h.055a3.895 3.895 0 11-.052 7.789zM11.611 329.618h-.13a2.238 2.238 0 01-1.6-.76 2.321 2.321 0 01-.533-1.76 2.122 2.122 0 012.224-1.964c.067 0 .136 0 .2.007a2.421 2.421 0 011.7.862 2.138 2.138 0 01.483 1.637 2.323 2.323 0 01-2.344 1.978zm295.79-1.66h-.057a2.18 2.18 0 01-1.556-.716 2.468 2.468 0 01-.63-1.806 2.146 2.146 0 012.24-2.119h.06a2.144 2.144 0 012.19 2.23 2.426 2.426 0 01-.69 1.754 2.174 2.174 0 01-1.558.657zm81.369-14.022c-.61-.064-.666-.516-.716-.915a2.784 2.784 0 00-.049-.3l-.322-1.3c-.487-1.952-.99-3.969-1.337-5.979a3.7 3.7 0 00-3.421-3.452c-2.127-.372-4.2-.881-6.4-1.421h-.019c-.926-.227-1.883-.462-2.851-.687a1.7 1.7 0 011.256-.742h.011l.181-.038a148.63 148.63 0 001.985-.479c1.726-.424 3.511-.862 5.291-1.135 2.523-.388 3.736-1.572 4.055-3.96a38.816 38.816 0 01.962-4.491c.139-.541.282-1.1.413-1.65.035-.145.065-.3.094-.442v-.007a3.311 3.311 0 01.693-1.7 2.367 2.367 0 01.744 1.561c.022.121.047.258.077.387.143.612.29 1.224.431 1.816.427 1.784.868 3.628 1.224 5.461a3.063 3.063 0 002.7 2.741c2.053.406 4.125.9 6.128 1.379h.02l1.8.428c.387.09.76.207 1.232.354.212.066.476.149.769.237a7.547 7.547 0 01-2.583.865c-.271.053-.527.1-.784.165l-.223.055c-2.007.493-4.079 1-6.137 1.4a3.192 3.192 0 00-2.914 2.826c-.315 1.71-.736 3.427-1.143 5.088v.017c-.138.561-.28 1.142-.416 1.713-.041.171-.076.352-.107.513a3.66 3.66 0 01-.638 1.7zM86.413 295.668a78.462 78.462 0 00-.474-1.857 35.824 35.824 0 01-.931-4.225c-.327-2.394-1.544-3.573-4.067-3.942a33.73 33.73 0 01-6.063-1.622 9.5 9.5 0 013.257-1.141h.011c.278-.06.565-.122.844-.19.7-.169 1.3-.3 1.825-.422 3.43-.772 3.43-.772 4.178-4.069.124-.545.277-1.223.474-2.017l.24-.971.024-.1v-.016c.2-.83.415-1.689.635-2.531.02-.074.1-.134.2-.217.061-.048.129-.1.2-.171a3.5 3.5 0 01.671 1.773c.032.181.069.387.114.579.081.341.166.686.248 1.022l.019.079c.293 1.2.6 2.437.813 3.672a3.068 3.068 0 002.749 2.705c1.627.328 3.266.734 4.851 1.127l.038.009c.55.136 1.12.277 1.68.413a.987.987 0 01.286.15c.066.043.14.091.231.144a1.37 1.37 0 01-1.191.734 4.7 4.7 0 00-.289.061l-.5.122-.187.046c-1.706.422-3.467.857-5.214 1.2a2.776 2.776 0 00-2.412 2.452c-.3 1.493-.658 2.991-1 4.44l-.065.275-.121.509c-.109.461-.245.923-.376 1.369-.058.2-.12.406-.178.613-.167-.003-.344-.003-.52-.003zm502.7-3.5h-.013a5.285 5.285 0 01-3.768-1.62 5.555 5.555 0 01-1.6-3.941 5.31 5.31 0 015.468-5.375h.033a5.512 5.512 0 013.884 1.689 5.363 5.363 0 011.551 3.816 5.617 5.617 0 01-5.557 5.431zm-397.269-4.577h-.032a3.692 3.692 0 01-2.628-1.119 3.6 3.6 0 01.07-5.114 3.715 3.715 0 012.6-1.043h.055a3.83 3.83 0 012.607 1.137 3.575 3.575 0 011.1 2.548 3.825 3.825 0 01-3.773 3.588zm515.594-6.337a1.572 1.572 0 01-.814-1.337v-.007c-.019-.108-.036-.21-.06-.311l-.2-.84-.077-.321c-.514-2.147-1.045-4.368-1.485-6.573a2.934 2.934 0 00-2.589-2.569c-2.024-.412-4.067-.9-6.044-1.367l-.041-.01q-.932-.222-1.865-.441c-.126-.03-.259-.052-.387-.074a2.085 2.085 0 01-1.386-.64 3.759 3.759 0 011.756-.644 9.18 9.18 0 00.648-.134c.394-.1.794-.2 1.182-.306h.018a43.626 43.626 0 015.158-1.129c2.306-.308 3.449-1.477 3.824-3.91.242-1.566.634-3.134 1.012-4.649.125-.5.282-1.127.422-1.722.027-.114.05-.232.072-.346a2.055 2.055 0 01.66-1.364 1.692 1.692 0 01.726 1.379c.024.144.048.293.083.433l.012.05c.582 2.358 1.184 4.8 1.653 7.225a3.085 3.085 0 002.741 2.712c2.1.431 4.229.93 6.285 1.413h.006c.72.169 1.536.361 2.342.547.047.011.095.021.143.03a1.108 1.108 0 01.938.666q-1.315.307-2.618.608h-.018c-1.732.4-3.523.816-5.274 1.238-.378.091-.721.171-1.024.242-2.993.7-2.993.7-3.727 3.832l-.01.043c-.06.257-.125.534-.2.834-.177.739-.337 1.5-.492 2.229a37.606 37.606 0 01-1.369 5.212zm-230.124-.654h-.039a2.1 2.1 0 01-2.208-2.183 2.2 2.2 0 012.129-2.3h.135a2.323 2.323 0 012.358 2.205 2.159 2.159 0 01-.626 1.564 2.423 2.423 0 01-1.749.714zm-205.973-14.026h-.067a2.385 2.385 0 01-2.353-2.138 2.116 2.116 0 01.607-1.57 2.436 2.436 0 011.758-.759h.013a2.337 2.337 0 011.712.728 2.223 2.223 0 01-1.67 3.74zm45.133-22.216a1.776 1.776 0 01-.84-1.391c-.018-.09-.035-.176-.056-.261q-.193-.807-.388-1.613v-.005c-.483-2-.982-4.064-1.393-6.11a2.94 2.94 0 00-2.579-2.578c-2.235-.46-4.493-.993-6.676-1.508l-1.957-.46-.127-.027a1.105 1.105 0 01-.932-.683l1.068-.256.031-.007c1.4-.336 2.724-.652 4.078-.97l.886-.208.109-.026c1.235-.291 2.512-.592 3.774-.86a2.707 2.707 0 002.276-2.313c.407-1.921.872-3.861 1.322-5.738l.421-1.761c.037-.158.07-.321.1-.479v-.004a4.844 4.844 0 01.67-1.873 3.8 3.8 0 01.655 1.794c.038.215.074.416.123.616.687 2.768 1.218 5.08 1.669 7.277a2.984 2.984 0 002.6 2.569c2.016.411 4.053.892 6.023 1.358.632.149 1.414.334 2.156.507.342.08.686.176 1.084.287.213.059.445.124.706.195a3.042 3.042 0 01-1.515.65c-.084.017-.18.037-.272.058-.8.184-1.615.375-2.4.559l-.051.012h-.005c-1.872.439-3.807.893-5.721 1.288a2.991 2.991 0 00-2.6 2.572c-.38 1.865-.826 3.744-1.256 5.562q-.177.745-.352 1.491c-.116.5-.254.992-.4 1.516-.08.287-.152.546-.227.822zm469.032-5.386h-.006a1.8 1.8 0 01-1.847-1.671 1.673 1.673 0 01.474-1.236 1.9 1.9 0 011.367-.573h.106a1.74 1.74 0 11-.09 3.478zm-771.141-2.324a3.552 3.552 0 01-3.547-3.459 3.427 3.427 0 013.423-3.395h.1a3.6 3.6 0 012.519.983 3.359 3.359 0 011.024 2.438 3.453 3.453 0 01-3.41 3.433zm580.377-1.075a1.778 1.778 0 01-.84-1.394 7.232 7.232 0 00-.055-.258q-.179-.751-.361-1.5l-.027-.112c-.482-2-.981-4.062-1.393-6.116a2.94 2.94 0 00-2.582-2.576c-2.261-.466-4.546-1.006-6.755-1.528l-.057-.013-1.82-.429-.129-.027a1.105 1.105 0 01-.932-.683l1.571-.375.048-.011h.011c1.165-.278 2.37-.566 3.549-.842l.811-.191.135-.032c1.25-.295 2.542-.6 3.822-.871a2.709 2.709 0 002.276-2.313c.42-1.985.9-3.989 1.366-5.927l.376-1.572a12.1 12.1 0 00.1-.481v-.008a4.83 4.83 0 01.67-1.87 3.8 3.8 0 01.653 1.787c.039.218.075.421.125.622a182.08 182.08 0 011.669 7.276 2.979 2.979 0 002.6 2.567c2.037.415 4.095.9 6.085 1.373h.011c.686.162 1.39.329 2.084.491.342.08.688.176 1.088.288l.042.012c.2.056.418.117.66.182a3.037 3.037 0 01-1.514.65c-.084.017-.179.037-.271.058-.872.2-1.766.409-2.555.595-1.841.432-3.743.878-5.624 1.266a2.988 2.988 0 00-2.6 2.572c-.38 1.865-.826 3.744-1.256 5.562l-.02.084q-.167.7-.332 1.406c-.117.5-.258 1-.407 1.536l-.005.019c-.07.251-.143.51-.217.783zm-139.735-14.567a1.837 1.837 0 01-.746-1.4 4.71 4.71 0 00-.067-.357l-.386-1.6c-.609-2.524-1.24-5.134-1.786-7.721a2.862 2.862 0 00-2.455-2.424c-2.518-.549-5.07-1.147-7.537-1.725h-.016l-.859-.2c-.141-.033-.29-.061-.422-.086a2.871 2.871 0 01-1.766-.81 4 4 0 011.781-.688h.013c.129-.027.262-.054.392-.084.746-.175 1.5-.36 2.235-.539 1.87-.457 3.8-.929 5.722-1.278a3.466 3.466 0 003.118-3.19c.376-2.113.893-4.235 1.392-6.287l.035-.143q.1-.43.209-.86c.055-.229.1-.473.142-.688a5.545 5.545 0 01.685-2.049c.531.177.6.6.662 1.008.015.1.031.2.053.29.185.8.383 1.63.557 2.364v.009c.522 2.2 1.062 4.478 1.517 6.732a3.1 3.1 0 002.72 2.72c2.075.424 4.163.923 6.181 1.405l.075.018c.633.151 1.284.307 1.926.458.127.03.252.055.385.082a4.344 4.344 0 012.079.878 41.421 41.421 0 01-5.528 1.466c-.839.18-1.627.349-2.427.548-.747.186-1.366.326-1.912.449-2.983.675-2.983.675-3.659 3.732-.121.548-.258 1.169-.44 1.924-.444 1.833-.859 3.639-1.3 5.551l-.009.039q-.278 1.211-.565 2.449zm-278.928 0a1.836 1.836 0 01-.745-1.4 4.96 4.96 0 00-.066-.354l-.285-1.18-.055-.225c-.627-2.589-1.274-5.266-1.834-7.917a2.863 2.863 0 00-2.455-2.424c-2.518-.549-5.07-1.147-7.538-1.725h-.016l-.859-.2c-.141-.033-.291-.061-.422-.086a2.871 2.871 0 01-1.766-.81 4 4 0 011.781-.688c.126-.026.27-.055.4-.087.749-.176 1.507-.361 2.24-.54 1.867-.456 3.8-.928 5.717-1.277a3.466 3.466 0 003.117-3.19c.376-2.109.892-4.228 1.39-6.278v-.005l.01-.043.234-.965c.054-.224.1-.457.141-.682a5.564 5.564 0 01.686-2.055c.533.178.6.6.663 1.011.014.091.03.194.052.287.169.722.342 1.456.511 2.166l.017.072v.013c.532 2.242 1.081 4.559 1.544 6.854a3.1 3.1 0 002.73 2.722c2.066.422 4.151.92 6.167 1.4h.018c.655.156 1.331.318 2 .475.126.03.251.055.384.082a4.347 4.347 0 012.081.878 41.4 41.4 0 01-5.526 1.465c-.837.18-1.627.349-2.428.548-.748.186-1.367.326-1.914.45-2.983.675-2.983.675-3.659 3.732v.006a90.285 90.285 0 01-.44 1.918 437.578 437.578 0 00-1.3 5.577v.013l-.564 2.449zM54.99 189.582c-.235-1.007-.473-2-.7-2.962v-.01c-.542-2.255-1.053-4.384-1.488-6.566a3.222 3.222 0 00-2.858-2.874c-1.978-.379-3.972-.859-5.9-1.324-.571-.137-1.213-.292-1.83-.438a6.315 6.315 0 00-.322-.064 2.067 2.067 0 01-1.5-.811l2.817-.669.168-.04c1.326-.315 2.578-.613 3.857-.915.634-.149 1.181-.27 1.663-.377 3.365-.745 3.365-.745 4.084-3.935.124-.548.264-1.169.449-1.921q.151-.615.3-1.232c.416-1.722.846-3.5 1.411-5.244a12.078 12.078 0 011.177 3.6c.091.431.186.876.3 1.312.392 1.528.766 3.027 1.04 4.551a2.939 2.939 0 002.574 2.6c2.016.429 4.058.911 6.032 1.376h.007c.78.184 1.582.373 2.371.556.244.057.488.121.77.195h.016l.026.007.441.115a1.306 1.306 0 01-1.143.782c-.073.014-.142.027-.21.044-.612.145-1.234.295-1.835.44h-.019c-2.07.5-4.21 1.014-6.332 1.427a3.087 3.087 0 00-2.722 2.727c-.42 2.04-.9 4.1-1.373 6.085l-.008.032c-.161.682-.327 1.388-.488 2.082-.016.072-.03.146-.042.218a1.651 1.651 0 01-.722 1.223zm664.543-15.216a2.342 2.342 0 01-2.248-2.126 2.381 2.381 0 01.567-1.757 2.244 2.244 0 011.573-.8h.14a2.171 2.171 0 012.167 2.106 2.524 2.524 0 01-.607 1.853 2.124 2.124 0 01-1.5.725zm-488.209-7.818a2.122 2.122 0 01-2.219-2.08 2.141 2.141 0 012.229-2.379h.026a2.112 2.112 0 012.208 2.192 2.229 2.229 0 01-.58 1.6 2.2 2.2 0 01-1.559.663zm243.268-6.627h-.048a2.29 2.29 0 01-1.612-.748 2.354 2.354 0 01-.632-1.715 2.419 2.419 0 012.283-2.212h.045a2.3 2.3 0 011.611 3.977 2.4 2.4 0 01-1.647.699zm170.685-4.079a2.118 2.118 0 01-2.231-2.155 2.258 2.258 0 01.6-1.665 2.226 2.226 0 011.621-.649h.1a2.143 2.143 0 012.132 2.274 2.116 2.116 0 01-2.211 2.192zm-292.243-.922h-.134a3.546 3.546 0 01-2.483-1.06 3.589 3.589 0 01-.952-2.54 3.731 3.731 0 011.047-2.613 3.576 3.576 0 012.568-1.04h.053a3.6 3.6 0 012.569 1.118 3.643 3.643 0 011.022 2.642 3.543 3.543 0 01-1.093 2.5 3.75 3.75 0 01-2.596.993zm203.2-11.549l-.614-2.634-1.227-5.27c-.1-.45-.2-.852-.286-1.258-.76-3.382-.76-3.382-3.584-4a68.64 68.64 0 01-1.751-.4c-1.892-.459-3.826-.9-5.7-1.335l-.084-.019c-.861-.2-1.75-.4-2.631-.608a1.066 1.066 0 011.07-.771 2.859 2.859 0 00.3-.049c.656-.156 1.324-.317 1.97-.472l.083-.02h.009c2.37-.571 4.82-1.161 7.251-1.639a3.243 3.243 0 002.859-2.879c.432-2.154.944-4.324 1.439-6.424l.051-.217.312-1.328c.038-.163.069-.33.1-.492a3.007 3.007 0 01.695-1.686c.55.251.626.738.7 1.208.019.124.039.253.069.372.135.551.277 1.111.414 1.653l.019.076c.514 2.032 1.045 4.133 1.378 6.23a4.291 4.291 0 001.2 2.56 4.839 4.839 0 002.568 1.131c2.077.372 4.166.873 6.187 1.357.8.192 1.629.39 2.455.58.092.021.19.038.276.053a1.419 1.419 0 011.011.49 1.66 1.66 0 01-1.229.586c-.128.021-.26.042-.387.072l-1.872.442h-.008c-2.432.576-4.947 1.171-7.435 1.686a2.947 2.947 0 00-2.561 2.593c-.453 2.217-.984 4.458-1.5 6.625l-.37 1.565c-.119.51-.27 1.02-.416 1.513l-.017.056a71.7 71.7 0 00-.187.642zM135.329 133.3c-.083 0-.168 0-.251-.007a4.694 4.694 0 01-3.241-1.563 4.809 4.809 0 01-1.23-3.415 4.59 4.59 0 014.7-4.547h.143a4.858 4.858 0 013.32 1.487 4.652 4.652 0 011.339 3.324 4.9 4.9 0 01-4.78 4.721zm634.089-13.261c-.052 0-.1 0-.155-.006a2.311 2.311 0 01.214-4.609h.132a2.124 2.124 0 012.047 2.324 2.32 2.32 0 01-2.238 2.29zM2.226 114.931h-.052a2.332 2.332 0 01-1.524-3.943 2.213 2.213 0 011.6-.665h.05a2.166 2.166 0 012.163 2.221 2.437 2.437 0 01-.695 1.73 2.161 2.161 0 01-1.542.657zm423.582-9.624a1.614 1.614 0 01-1.175-.464 1.752 1.752 0 01-.477-1.264 1.623 1.623 0 011.536-1.706h.132a1.757 1.757 0 011.773 1.62 1.669 1.669 0 01-.426 1.23 1.8 1.8 0 01-1.273.587zm-155.63-4.417h-.1a1.872 1.872 0 01-1.667-1.9 1.816 1.816 0 011.8-1.734h.026a1.835 1.835 0 011.807 1.764 1.949 1.949 0 01-1.865 1.876zm-86.409-25.966a3.566 3.566 0 01-2.512-1.08 3.324 3.324 0 01.037-4.84 3.559 3.559 0 012.4-1.056h.046a3.628 3.628 0 013.51 3.328 3.55 3.55 0 01-3.448 3.647zm485.357-1.234a1.378 1.378 0 01-.789-1.168v-.01c-.015-.075-.029-.146-.046-.216-.108-.453-.217-.906-.33-1.369v-.01c-.359-1.479-.729-3.008-1.019-4.525a2.938 2.938 0 00-2.554-2.606c-1.573-.312-3.161-.7-4.7-1.067l-.04-.01-1.388-.333a3.493 3.493 0 00-.247-.047 1.18 1.18 0 01-1.034-.66 27.4 27.4 0 013.977-1.066c.53-.114 1.076-.231 1.608-.359.324-.078.625-.148.893-.211l.047-.011c2.924-.682 2.924-.682 3.616-3.642l.016-.07c.063-.269.133-.569.211-.892.286-1.183.564-2.382.859-3.651v-.006c.155-.667.315-1.36.487-2.092a4.59 4.59 0 01.93 2.3c.044.241.085.469.145.695a57.223 57.223 0 011.011 4.55 2.893 2.893 0 002.543 2.6 48.044 48.044 0 017.7 2.16l-1.82.436-.021.005-.043.01-3.64.871-.576.139c-.551.134-1.121.273-1.691.382a2.826 2.826 0 00-2.421 2.465c-.362 1.736-.76 3.436-1.181 5.236v.021c-.163.7-.332 1.418-.5 2.145zm-214.148-13.4a1.773 1.773 0 01-.839-1.391 7.238 7.238 0 00-.056-.261q-.18-.756-.364-1.512l-.027-.111c-.482-2-.981-4.061-1.392-6.108a2.942 2.942 0 00-2.581-2.578c-2.237-.462-4.5-1-6.685-1.511h-.011L443 46.81l-1.909-.449-.118-.026h-.009a1.108 1.108 0 01-.933-.683l1.562-.373.025-.006c1.233-.295 2.4-.573 3.591-.852l.8-.189c1.3-.306 2.639-.623 3.967-.906a2.706 2.706 0 002.276-2.311c.4-1.907.865-3.836 1.312-5.7v-.007l.428-1.793c.038-.161.071-.327.1-.488a4.821 4.821 0 01.67-1.869 3.8 3.8 0 01.656 1.8c.038.213.073.414.122.613a182.39 182.39 0 011.67 7.276 2.982 2.982 0 002.6 2.567c2.035.415 4.092.9 6.08 1.373h.006c.683.162 1.389.329 2.092.493.346.08.692.177 1.093.288l.031.008c.2.056.422.118.668.184a3.032 3.032 0 01-1.521.651c-.089.018-.179.036-.266.056-.859.2-1.752.406-2.539.591-1.844.433-3.751.881-5.64 1.271a2.986 2.986 0 00-2.6 2.572c-.38 1.857-.823 3.728-1.251 5.538l-.025.106-.332 1.407c-.116.5-.255.992-.4 1.516l-.016.056c-.069.246-.14.5-.212.767zm-110.01-1.255a1.808 1.808 0 01-1.807-1.643 1.609 1.609 0 01.4-1.2 1.835 1.835 0 011.308-.606h.1a1.753 1.753 0 011.813 1.605 1.815 1.815 0 01-1.715 1.842zm224.175-14.472a3.562 3.562 0 01-2.551-1.027 3.717 3.717 0 01-1.048-2.671 3.431 3.431 0 013.484-3.535h.081a3.563 3.563 0 013.68 3.541 3.636 3.636 0 01-3.641 3.693zM258.35 33.451a1.837 1.837 0 01-.745-1.4c-.02-.124-.038-.24-.066-.354l-.354-1.468-.015-.062c-.616-2.551-1.253-5.185-1.8-7.792a2.86 2.86 0 00-2.455-2.424c-2.458-.536-4.949-1.119-7.357-1.682h-.017l-1.041-.249c-.142-.033-.293-.062-.426-.088a2.872 2.872 0 01-1.762-.811 4 4 0 011.775-.688h.014c.13-.027.265-.055.4-.085.743-.174 1.5-.358 2.228-.537l.021-.005h.006c1.862-.455 3.788-.925 5.7-1.273a3.461 3.461 0 003.118-3.19c.371-2.078.878-4.166 1.368-6.186v-.008l.267-1.1c.055-.228.1-.464.143-.692a5.558 5.558 0 01.683-2.044c.534.178.6.6.664 1.01v.007c.015.093.03.19.051.28.176.756.358 1.522.534 2.263.531 2.239 1.081 4.552 1.541 6.843a3.106 3.106 0 002.721 2.735c2.082.425 4.184.928 6.217 1.414.609.146 1.3.311 1.964.467.127.03.252.055.384.082a4.345 4.345 0 012.08.878 41.4 41.4 0 01-5.528 1.466h-.015c-.794.17-1.616.347-2.412.544a81.95 81.95 0 01-1.915.45c-2.98.674-2.98.674-3.655 3.728-.122.55-.259 1.172-.442 1.927a470.26 470.26 0 00-1.254 5.362l-.006.026c-.2.863-.4 1.756-.612 2.651zM14.388 31.8h-.006a2.2 2.2 0 01-1.582-.685 2.39 2.39 0 01-.673-1.725 2.225 2.225 0 012.183-2.221h.039a2.159 2.159 0 011.564.658 2.349 2.349 0 01.647 1.728 2.271 2.271 0 01-2.172 2.245zm84.528-10.18h-.052a4.258 4.258 0 01-3-1.255 4.638 4.638 0 010-6.364 4.188 4.188 0 012.987-1.3h.041a4.62 4.62 0 014.425 4.464 4.487 4.487 0 01-1.329 3.11 4.382 4.382 0 01-3.072 1.345zm660.215-2.238a2.109 2.109 0 01-2.223-2.165 2.232 2.232 0 01.563-1.6 2.176 2.176 0 011.544-.674h.124a2.12 2.12 0 012.212 2.054 2.137 2.137 0 01-2.22 2.391zm-250.613-7.625a1.788 1.788 0 01-1.73-1.709 1.926 1.926 0 01.461-1.391 1.631 1.631 0 011.122-.569h.1a1.861 1.861 0 011.76 1.712 1.815 1.815 0 01-1.6 1.952 1.424 1.424 0 01-.113.005zm175.313-8.308a1.737 1.737 0 01-1.779-1.707 1.69 1.69 0 01.488-1.215A1.8 1.8 0 01683.829 0a1.758 1.758 0 011.818 1.708 1.75 1.75 0 01-1.784 1.741z"
                    transform="translate(0 .018)"
                    fill="#fff"
                  />
                </g>
              </g>
            </svg>
          </div>
          <div className="col-lg-9 d-flex justify-content-center align-items-center">
            <div className="w-100">
              <h4>Suggest Reward</h4>
              <textarea
                rows="3"
                className="form-control rounded-5 res"
                placeholder="Tell the creator what you want for a reward…"
              ></textarea>
              <div className="mt-4 text-end">
                <button className="btn fw-bold btn-outline-dark mx-2 px-5 rounded-pill">
                  View
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="row mt-3">
          {rewards.map((el) => (
            <RewardCard {...el} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SuggestReward;