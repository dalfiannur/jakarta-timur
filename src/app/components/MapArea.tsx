"use client";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

const animate = (hovered: string, name: string) => ({
  fill: hovered === name ? "rgba(240, 99, 146, 1)" : "rgba(244, 136, 172, 1)",
});

const labelAnimate = (setHovered: (key: string) => void) => ({
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      duration: 0.6,
    },
  },
  exit: {
    opacity: 0,
  },
  onHoverEnd: () => setHovered(""),
});

export const MapArea = () => {
  const [hovered, setHovered] = useState("");

  return (
    <svg
      width="345"
      height="554"
      viewBox="0 0 345 554"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g>
        <motion.g
          id="pasarRebo"
          onHoverStart={() => setHovered("pasarRebo")}
          onHoverEnd={() => setHovered("")}
        >
          <motion.path
            d="M15.5004 411.16L39.3457 403.052C39.4484 403.018 39.5538 402.991 39.6607 402.973L43.1712 402.388C44.3903 402.185 45.5 403.125 45.5 404.361V409.014C45.5 409.333 45.5764 409.648 45.7228 409.932L52.9598 423.953C53.2932 424.599 53.2499 425.375 52.8466 425.98L46.1816 435.978C45.7635 436.605 45.7335 437.414 46.1041 438.07L62.4071 466.95C62.7718 467.596 62.749 468.39 62.3478 469.014L54.4862 481.244C54.177 481.725 54.0885 482.315 54.243 482.866L62 510.5L25.3317 467.965C24.8243 467.376 24.0219 467.135 23.274 467.346L7.10551 471.906C5.97445 472.225 4.81341 471.505 4.59684 470.35L2.08558 456.956C2.02928 456.656 2.04252 456.347 2.12429 456.053L14.2172 412.518C14.3941 411.881 14.8745 411.373 15.5004 411.16Z"
            stroke="white"
            stroke-width="3"
            animate={animate(hovered, "pasarRebo")}
          />
          <path
            d="M25.2645 456.6C25.4191 456.839 25.691 456.998 26.0004 456.998C26.3098 456.998 26.5816 456.839 26.741 456.6L31.9066 448.622C32.6004 447.548 33.0035 446.367 33.0035 444.998C32.9988 441.042 29.891 438 26.0004 438C22.1098 438 19.002 441.042 19.002 444.998C19.002 446.367 19.4051 447.548 20.0988 448.622L25.2645 456.6ZM26.0004 441C28.2082 441 29.9988 442.791 29.9988 444.998C29.9988 447.206 28.2082 448.997 26.0004 448.997C23.7926 448.997 22.002 447.206 22.002 444.998C22.002 442.791 23.7926 441 26.0004 441Z"
            fill="white"
          />
          <path
            d="M25.9996 459.998L31.1277 453.164C32.8809 454.083 34.0012 455.456 34.0012 456.998C34.0012 459.759 30.4199 462 25.9996 462C21.5793 462 17.998 459.759 17.998 456.998C17.998 455.456 19.1184 454.083 20.8715 453.164L25.9996 459.998Z"
            fill="#EB30A2"
          />
        </motion.g>

        <motion.g
          id="makasar"
          onHoverStart={() => setHovered("makasar")}
          onHoverEnd={() => setHovered("")}
        >
          <motion.path
            d="M87.5508 266.324L95.5077 238.708C95.7885 237.734 96.7538 237.124 97.7543 237.289L135.012 243.42C135.333 243.472 135.661 243.446 135.969 243.344L139.57 242.143C139.853 242.049 140.154 242.019 140.45 242.056L215.981 251.498C218.052 251.756 218.391 254.616 216.439 255.353L172.993 271.748C171.913 272.155 171.401 273.39 171.876 274.441L182.302 297.56C182.432 297.849 182.492 298.165 182.476 298.482L181.013 327.737C181.004 327.911 181.019 328.087 181.056 328.258L187.732 359.258C187.896 360.016 187.606 360.8 186.989 361.27L178.422 367.797C177.852 368.232 177.093 368.328 176.432 368.049L155.148 359.062C155.049 359.021 154.948 358.987 154.844 358.962L133.768 353.81C132.997 353.622 132.188 353.906 131.706 354.536L122.003 367.192C121.42 367.952 121.458 369.017 122.092 369.734L132.233 381.198C132.409 381.397 132.623 381.559 132.863 381.675L144.868 387.455C145.56 387.788 146 388.488 146 389.257V403C146 404.105 145.105 405 144 405H133.217C132.753 405 132.304 405.161 131.946 405.455L111.161 422.546C110.473 423.111 109.495 423.154 108.76 422.651L83.8695 405.596C83.3253 405.223 83 404.606 83 403.946V353.5V322.352C83 322.119 82.9592 321.888 82.8796 321.669L77.1204 305.831C77.0408 305.612 77 305.381 77 305.148V287.972C77 287.662 77.0723 287.355 77.2111 287.078L87.4179 266.664C87.4725 266.555 87.517 266.441 87.5508 266.324Z"
            stroke="white"
            stroke-width="3"
            animate={animate(hovered, "makasar")}
          />
          <path
            d="M135.264 311.6C135.419 311.839 135.691 311.998 136 311.998C136.31 311.998 136.582 311.839 136.741 311.6L141.907 303.622C142.6 302.548 143.004 301.367 143.004 299.998C142.999 296.042 139.891 293 136 293C132.11 293 129.002 296.042 129.002 299.998C129.002 301.367 129.405 302.548 130.099 303.622L135.264 311.6ZM136 296C138.208 296 139.999 297.791 139.999 299.998C139.999 302.206 138.208 303.997 136 303.997C133.793 303.997 132.002 302.206 132.002 299.998C132.002 297.791 133.793 296 136 296Z"
            fill="white"
          />
          <path
            d="M136 314.998L141.128 308.164C142.881 309.083 144.001 310.456 144.001 311.998C144.001 314.759 140.42 317 136 317C131.579 317 127.998 314.759 127.998 311.998C127.998 310.456 129.118 309.083 130.871 308.164L136 314.998Z"
            fill="#EB30A2"
          />
        </motion.g>

        <motion.g
          id="kramatjati"
          onHoverStart={() => setHovered("kramatjati")}
          onHoverEnd={() => setHovered("")}
        >
          <motion.path
            d="M56.1025 257.591L83.6704 265.345C84.8791 265.685 85.4793 267.041 84.9177 268.165L75.7111 286.578C75.5723 286.855 75.5 287.162 75.5 287.472V305.109C75.5 305.367 75.5499 305.623 75.6471 305.862L81.8529 321.138C81.9501 321.377 82 321.633 82 321.891V403.5V410.381C82 410.784 82.1218 411.178 82.3494 411.511L88.1506 419.989C88.3782 420.322 88.5 420.716 88.5 421.119V430C88.5 431.105 87.6046 432 86.5 432H72.4815C71.2058 432 70.2561 430.822 70.5271 429.575L72.3453 421.212C72.4452 420.752 72.3799 420.272 72.1608 419.855L67.5 411L64.6839 403.96C64.5631 403.658 64.5178 403.331 64.5518 403.008L65.4797 394.193C65.4932 394.065 65.5191 393.938 65.5571 393.814L67.4116 387.787C67.4702 387.597 67.5 387.399 67.5 387.199V384.229C67.5 382.877 66.1868 381.915 64.8977 382.322L59.0999 384.153C58.4192 384.368 57.9046 384.929 57.7498 385.626L57.2291 387.969C57.0857 388.614 56.633 389.147 56.0195 389.392L53.6985 390.321C52.737 390.705 52.2281 391.76 52.5257 392.752L53.4157 395.719C53.4716 395.905 53.5 396.099 53.5 396.294V399.43C53.5 400.098 53.1658 400.723 52.6094 401.094L50.8928 402.238C50.6345 402.41 50.3396 402.52 50.0315 402.559L44.6715 403.229C43.5051 403.374 42.4651 402.488 42.4246 401.313L40.5347 346.506C40.5129 345.873 40.1926 345.288 39.6713 344.929L26.8645 336.096C26.3232 335.723 26 335.107 26 334.45V316.265C26 315.772 26.1817 315.297 26.5103 314.93L47.1276 291.916C47.3712 291.644 47.5357 291.31 47.6033 290.952L53.5956 259.146C53.813 257.993 54.9725 257.274 56.1025 257.591Z"
            stroke="white"
            stroke-width="3"
            animate={animate(hovered, "kramatjati")}
          />
          <path
            d="M49.2645 330.6C49.4191 330.839 49.691 330.998 50.0004 330.998C50.3098 330.998 50.5816 330.839 50.741 330.6L55.9066 322.622C56.6004 321.548 57.0035 320.367 57.0035 318.998C56.9988 315.042 53.891 312 50.0004 312C46.1098 312 43.002 315.042 43.002 318.998C43.002 320.367 43.4051 321.548 44.0988 322.622L49.2645 330.6ZM50.0004 315C52.2082 315 53.9988 316.791 53.9988 318.998C53.9988 321.206 52.2082 322.997 50.0004 322.997C47.7926 322.997 46.002 321.206 46.002 318.998C46.002 316.791 47.7926 315 50.0004 315Z"
            fill="white"
          />
          <path
            d="M49.9996 333.998L55.1277 327.164C56.8809 328.083 58.0012 329.456 58.0012 330.998C58.0012 333.759 54.4199 336 49.9996 336C45.5793 336 41.998 333.759 41.998 330.998C41.998 329.456 43.1184 328.083 44.8715 327.164L49.9996 333.998Z"
            fill="#EB30A2"
          />
        </motion.g>

        <motion.g
          id="cakung"
          onHoverStart={() => setHovered("cakung")}
          onHoverEnd={() => setHovered("")}
        >
          <motion.path
            d="M266.897 2.22532L215.246 21.5342C214.491 21.8164 213.979 22.524 213.948 23.3292L212.075 71.0784C212.033 72.1516 211.151 73 210.077 73H191.264C190.256 73 189.405 73.7499 189.279 74.7499L182.217 130.778C182.092 131.766 182.713 132.695 183.674 132.958L303.157 165.633C303.964 165.854 304.823 165.549 305.311 164.868L328.305 132.772C328.434 132.592 328.532 132.392 328.596 132.179L338.453 99.1558C338.484 99.0521 338.507 98.9461 338.521 98.8388L343 64V8.18146C343 7.00852 341.995 6.08737 340.827 6.18898L297.354 9.96923C297.12 9.98958 296.884 9.96853 296.657 9.90703L268.121 2.16842C267.717 2.0589 267.289 2.07881 266.897 2.22532Z"
            stroke="white"
            stroke-width="3"
            animate={animate(hovered, "cakung")}
          />
          <path
            d="M281.264 88.6C281.419 88.8391 281.691 88.9984 282 88.9984C282.31 88.9984 282.582 88.8391 282.741 88.6L287.907 80.6219C288.6 79.5484 289.004 78.3672 289.004 76.9984C288.999 73.0422 285.891 70 282 70C278.11 70 275.002 73.0422 275.002 76.9984C275.002 78.3672 275.405 79.5484 276.099 80.6219L281.264 88.6ZM282 73C284.208 73 285.999 74.7906 285.999 76.9984C285.999 79.2063 284.208 80.9969 282 80.9969C279.793 80.9969 278.002 79.2063 278.002 76.9984C278.002 74.7906 279.793 73 282 73Z"
            fill="white"
          />
          <path
            d="M282 91.9984L287.128 85.1641C288.881 86.0828 290.001 87.4562 290.001 88.9984C290.001 91.7594 286.42 94 282 94C277.579 94 273.998 91.7594 273.998 88.9984C273.998 87.4562 275.118 86.0828 276.871 85.1641L282 91.9984Z"
            fill="#EB30A2"
          />
        </motion.g>

        <motion.g
          id="durenSawit"
          onHoverStart={() => setHovered("durenSawit")}
          onHoverEnd={() => setHovered("")}
        >
          <motion.path
            d="M282.889 174.192L300.292 168.154C302.158 167.506 302.055 164.832 300.144 164.33L179 132.5L162.777 129.346C161.768 129.149 160.775 129.75 160.48 130.734L155.163 148.457C155.056 148.812 154.853 149.13 154.576 149.377L141.5 161L123.821 173.901C123.305 174.277 123 174.878 123 175.516V192.187C123 192.708 123.203 193.209 123.567 193.582L140.76 211.24C141.223 211.715 141.42 212.389 141.286 213.039L135.426 241.434C135.195 242.557 135.952 243.644 137.085 243.816L217.232 255.959C217.41 255.986 217.591 255.989 217.77 255.968L265.762 250.209C266.757 250.089 267.51 249.251 267.523 248.249L267.995 212.348C267.998 212.118 268.041 211.89 268.122 211.674L281.671 175.382C281.879 174.823 282.326 174.387 282.889 174.192Z"
            stroke="white"
            stroke-width="3"
            animate={animate(hovered, "durenSawit")}
          />
          <path
            d="M210.264 200.6C210.419 200.839 210.691 200.998 211 200.998C211.31 200.998 211.582 200.839 211.741 200.6L216.907 192.622C217.6 191.548 218.004 190.367 218.004 188.998C217.999 185.042 214.891 182 211 182C207.11 182 204.002 185.042 204.002 188.998C204.002 190.367 204.405 191.548 205.099 192.622L210.264 200.6ZM211 185C213.208 185 214.999 186.791 214.999 188.998C214.999 191.206 213.208 192.997 211 192.997C208.793 192.997 207.002 191.206 207.002 188.998C207.002 186.791 208.793 185 211 185Z"
            fill="white"
          />
          <path
            d="M211 203.998L216.128 197.164C217.881 198.083 219.001 199.456 219.001 200.998C219.001 203.759 215.42 206 211 206C206.579 206 202.998 203.759 202.998 200.998C202.998 199.456 204.118 198.083 205.871 197.164L211 203.998Z"
            fill="#EB30A2"
          />
        </motion.g>

        <motion.g
          id="puloGadung"
          onHoverStart={() => setHovered("pulogadung")}
          onHoverEnd={() => setHovered("")}
        >
          <motion.path
            d="M180.786 128.533L188.757 73.675C188.897 72.7082 188.319 71.7814 187.388 71.483L162.672 63.5551C162.558 63.5185 162.447 63.4715 162.341 63.415L105.895 33.2788C104.706 32.6441 103.243 33.3431 102.989 34.6668L83.571 136.02C83.3008 137.43 84.5613 138.657 85.9641 138.349L144.15 125.577C144.382 125.526 144.62 125.517 144.854 125.549L178.531 130.227C179.621 130.378 180.628 129.621 180.786 128.533Z"
            stroke="white"
            stroke-width="3"
            animate={animate(hovered, "pulogadung")}
          />
          <path
            d="M145.264 96.6C145.419 96.8391 145.691 96.9984 146 96.9984C146.31 96.9984 146.582 96.8391 146.741 96.6L151.907 88.6219C152.6 87.5484 153.004 86.3672 153.004 84.9984C152.999 81.0422 149.891 78 146 78C142.11 78 139.002 81.0422 139.002 84.9984C139.002 86.3672 139.405 87.5484 140.099 88.6219L145.264 96.6ZM146 81C148.208 81 149.999 82.7906 149.999 84.9984C149.999 87.2063 148.208 88.9969 146 88.9969C143.793 88.9969 142.002 87.2063 142.002 84.9984C142.002 82.7906 143.793 81 146 81Z"
            fill="white"
          />
          <path
            d="M146 99.9984L151.128 93.1641C152.881 94.0828 154.001 95.4562 154.001 96.9984C154.001 99.7594 150.42 102 146 102C141.579 102 137.998 99.7594 137.998 96.9984C137.998 95.4562 139.118 94.0828 140.871 93.1641L146 99.9984Z"
            fill="#EB30A2"
          />
        </motion.g>

        <motion.g
          id="matraman"
          onHoverStart={() => setHovered("matraman")}
          onHoverEnd={() => setHovered("")}
        >
          <motion.path
            d="M59.1981 98.4076L92.5 94L79.2744 174.823C79.1162 175.79 78.2806 176.5 77.3007 176.5H70.8552C70.309 176.5 69.7865 176.277 69.4092 175.882L28.3196 132.881C27.5812 132.108 27.5809 130.891 28.3189 130.118L58.0138 99.0094C58.3285 98.6797 58.7463 98.4674 59.1981 98.4076Z"
            stroke="white"
            stroke-width="3"
            animate={animate(hovered, "matraman")}
          />
          <path
            d="M62.2645 137.6C62.4191 137.839 62.691 137.998 63.0004 137.998C63.3098 137.998 63.5816 137.839 63.741 137.6L68.9066 129.622C69.6004 128.548 70.0035 127.367 70.0035 125.998C69.9988 122.042 66.891 119 63.0004 119C59.1098 119 56.002 122.042 56.002 125.998C56.002 127.367 56.4051 128.548 57.0988 129.622L62.2645 137.6ZM63.0004 122C65.2082 122 66.9988 123.791 66.9988 125.998C66.9988 128.206 65.2082 129.997 63.0004 129.997C60.7926 129.997 59.002 128.206 59.002 125.998C59.002 123.791 60.7926 122 63.0004 122Z"
            fill="white"
          />
          <path
            d="M62.9996 140.998L68.1277 134.164C69.8809 135.083 71.0012 136.456 71.0012 137.998C71.0012 140.759 67.4199 143 62.9996 143C58.5793 143 54.998 140.759 54.998 137.998C54.998 136.456 56.1184 135.083 57.8715 134.164L62.9996 140.998Z"
            fill="#EB30A2"
          />
        </motion.g>

        <motion.g
          id="jatinegara"
          onHoverStart={() => setHovered("jatinegara")}
          onHoverEnd={() => setHovered("")}
        >
          <motion.path
            d="M95.7576 236.26L134.779 242.024C136.187 242.232 137.278 240.816 136.717 239.507C136.576 239.177 136.535 238.811 136.601 238.457L141.813 210.502C141.931 209.873 141.739 209.225 141.299 208.76L124.548 191.079C124.196 190.707 124 190.215 124 189.703V173.45C124 172.849 124.27 172.28 124.736 171.9L156.001 146.407C156.326 146.142 156.559 145.783 156.668 145.379L160.91 129.682C161.224 128.522 160.451 127.35 159.262 127.18L144.355 125.051C144.12 125.017 143.881 125.026 143.649 125.076L85.3384 137.71C84.5317 137.885 83.9152 138.537 83.7864 139.353L78.2665 174.312C78.113 175.284 77.2752 176 76.291 176H71.1536C70.1939 176 69.3696 176.682 69.1892 177.624L54.3503 255.17C54.1529 256.201 54.7865 257.209 55.8012 257.478L84.077 264.989C85.1407 265.272 86.2327 264.642 86.5208 263.58L93.535 237.715C93.8002 236.737 94.7551 236.112 95.7576 236.26Z"
            stroke="white"
            stroke-width="3"
            animate={animate(hovered, "jatinegara")}
          />
          <path
            d="M99.2645 203.6C99.4191 203.839 99.691 203.998 100 203.998C100.31 203.998 100.582 203.839 100.741 203.6L105.907 195.622C106.6 194.548 107.004 193.367 107.004 191.998C106.999 188.042 103.891 185 100 185C96.1098 185 93.002 188.042 93.002 191.998C93.002 193.367 93.4051 194.548 94.0988 195.622L99.2645 203.6ZM100 188C102.208 188 103.999 189.791 103.999 191.998C103.999 194.206 102.208 195.997 100 195.997C97.7926 195.997 96.002 194.206 96.002 191.998C96.002 189.791 97.7926 188 100 188Z"
            fill="white"
          />
          <path
            d="M99.9996 206.998L105.128 200.164C106.881 201.083 108.001 202.456 108.001 203.998C108.001 206.759 104.42 209 99.9996 209C95.5793 209 91.998 206.759 91.998 203.998C91.998 202.456 93.1184 201.083 94.8715 200.164L99.9996 206.998Z"
            fill="#EB30A2"
          />
        </motion.g>

        <motion.g
          id="cipayung"
          onHoverStart={() => setHovered("cipayung")}
          onHoverEnd={() => setHovered("")}
        >
          <motion.path
            d="M82.0591 409.291L82.2127 407.447C82.3405 405.914 84.0793 405.093 85.3442 405.969L107.285 421.159C108.007 421.659 108.971 421.629 109.661 421.086L131.42 403.956C131.794 403.662 132.261 403.51 132.737 403.529L142.42 403.917C143.555 403.962 144.5 403.054 144.5 401.918V388.197C144.5 387.46 144.094 386.783 143.444 386.435L130.839 379.682C130.615 379.562 130.416 379.4 130.252 379.205L121.033 368.229C120.429 367.511 120.406 366.47 120.977 365.726L130.701 353.042C131.186 352.409 132 352.125 132.774 352.318L155.353 357.963C155.451 357.988 155.547 358.02 155.64 358.059L175.802 366.499C176.531 366.804 177.37 366.651 177.945 366.11L184.576 359.87C185.14 359.339 185.96 359.182 186.681 359.466L203.584 366.139C204.162 366.366 204.601 366.849 204.772 367.446L214.875 402.564C214.957 402.851 214.974 403.153 214.925 403.447L193.88 529.227C193.68 530.427 192.463 531.171 191.303 530.803L174.548 525.491C173.646 525.205 172.667 525.59 172.202 526.415L163.744 541.408C162.979 542.765 161.023 542.764 160.259 541.405L148.59 520.66C148.53 520.554 148.48 520.442 148.441 520.326L141.705 500.599C141.571 500.209 141.321 499.87 140.988 499.628L125.511 488.372C125.179 488.13 124.929 487.791 124.795 487.402L118.691 469.558C118.566 469.194 118.339 468.873 118.036 468.635L102.521 456.411C102.183 456.144 101.94 455.775 101.828 455.359L98.614 443.424C98.5389 443.144 98.4042 442.885 98.2192 442.663L88.9636 431.556C88.664 431.197 88.5 430.744 88.5 430.276V420.119C88.5 419.716 88.3782 419.322 88.1506 418.989L82.4015 410.587C82.1418 410.207 82.0209 409.75 82.0591 409.291Z"
            stroke="white"
            stroke-width="3"
            animate={animate(hovered, "cipayung")}
          />
          <path
            d="M171.264 444.6C171.419 444.839 171.691 444.998 172 444.998C172.31 444.998 172.582 444.839 172.741 444.6L177.907 436.622C178.6 435.548 179.004 434.367 179.004 432.998C178.999 429.042 175.891 426 172 426C168.11 426 165.002 429.042 165.002 432.998C165.002 434.367 165.405 435.548 166.099 436.622L171.264 444.6ZM172 429C174.208 429 175.999 430.791 175.999 432.998C175.999 435.206 174.208 436.997 172 436.997C169.793 436.997 168.002 435.206 168.002 432.998C168.002 430.791 169.793 429 172 429Z"
            fill="white"
          />
          <path
            d="M172 447.998L177.128 441.164C178.881 442.083 180.001 443.456 180.001 444.998C180.001 447.759 176.42 450 172 450C167.579 450 163.998 447.759 163.998 444.998C163.998 443.456 165.118 442.083 166.871 441.164L172 447.998Z"
            fill="#EB30A2"
          />
        </motion.g>

        <motion.g
          id="ciracas"
          onHoverStart={() => setHovered("ciracas")}
          onHoverEnd={() => setHovered("")}
        >
          <motion.path
            d="M116.412 544H157.572C159.104 544 160.067 542.349 159.313 541.016L148.081 521.143C148.027 521.048 147.981 520.948 147.944 520.846L140.704 501.057C140.571 500.693 140.335 500.376 140.026 500.144L124.973 488.854C124.664 488.623 124.429 488.308 124.296 487.946L117.683 469.996C117.563 469.671 117.361 469.382 117.096 469.159L101.94 456.371C101.652 456.129 101.439 455.81 101.325 455.452L97.6125 443.852C97.5381 443.619 97.4218 443.402 97.2694 443.212L88.1214 431.777C87.73 431.288 87.132 431.01 86.5056 431.027L71.6332 431.429C70.3102 431.465 69.3179 430.228 69.6389 428.944L71.8271 420.192C71.9389 419.744 71.8928 419.272 71.6964 418.855L64.2379 403.005C64.0823 402.675 64.0202 402.308 64.0585 401.944L64.9797 393.193C64.9932 393.065 65.0191 392.938 65.0571 392.814L66.9116 386.787C66.9702 386.597 67 386.399 67 386.199V383.688C67 382.348 65.7085 381.387 64.4253 381.772L58.1233 383.663C57.4297 383.871 56.9027 384.438 56.7456 385.145L56.1743 387.716C56.0625 388.219 55.7604 388.66 55.3314 388.946L52.6727 390.718C51.9695 391.187 51.6368 392.047 51.8418 392.867L52.4403 395.261C52.4799 395.42 52.5 395.583 52.5 395.746V398.93C52.5 399.598 52.1658 400.223 51.6094 400.594L49.8775 401.748C49.629 401.914 49.3465 402.022 49.0509 402.064L47.7172 402.255C46.7319 402.395 46 403.239 46 404.235V409.461C46 409.814 46.0933 410.161 46.2704 410.466L54.3351 424.355C54.7382 425.049 54.6872 425.917 54.2056 426.559L46.8201 436.407C46.3256 437.066 46.2862 437.961 46.7208 438.661L55 452L63.4518 467.495C63.7914 468.118 63.7759 468.874 63.411 469.482L55.4337 482.777C55.1564 483.239 55.0773 483.794 55.2145 484.315L61.9733 509.999C62.2613 511.093 63.3986 511.73 64.4822 511.405L81.2624 506.371C82.0157 506.145 82.8315 506.382 83.3472 506.976L114.902 543.311C115.282 543.749 115.833 544 116.412 544Z"
            stroke="white"
            stroke-width="3"
            animate={animate(hovered, "ciracas")}
          />
          <path
            d="M93.2645 488.6C93.4191 488.839 93.691 488.998 94.0004 488.998C94.3098 488.998 94.5816 488.839 94.741 488.6L99.9066 480.622C100.6 479.548 101.004 478.367 101.004 476.998C100.999 473.042 97.891 470 94.0004 470C90.1098 470 87.002 473.042 87.002 476.998C87.002 478.367 87.4051 479.548 88.0988 480.622L93.2645 488.6ZM94.0004 473C96.2082 473 97.9988 474.791 97.9988 476.998C97.9988 479.206 96.2082 480.997 94.0004 480.997C91.7926 480.997 90.002 479.206 90.002 476.998C90.002 474.791 91.7926 473 94.0004 473Z"
            fill="white"
          />
          <path
            d="M93.9996 491.998L99.1277 485.164C100.881 486.083 102.001 487.456 102.001 488.998C102.001 491.759 98.4199 494 93.9996 494C89.5793 494 85.998 491.759 85.998 488.998C85.998 487.456 87.1184 486.083 88.8715 485.164L93.9996 491.998Z"
            fill="#EB30A2"
          />
        </motion.g>
      </g>

      <AnimatePresence>
        {hovered === "pasarRebo" && (
          <motion.g id="labelPasarRebo" {...labelAnimate(setHovered)}>
            <defs>
              <filter id="fPasarRebo" width={102} height={52}>
                <feOffset in="SourceGraphic" dx={0} dy={0} />
                <feBlend in="SourceGraphic" in2="offOut" />
              </filter>
            </defs>
            <rect
              x={60}
              y={400}
              width={116}
              height={50}
              rx={25}
              stroke="#efefef"
              fill="#fff"
              filter="url(#fPasarRebo)"
              z={700}
            />
            <text x={75} y={432} fill="rgba(240, 99, 146, 1)" fontWeight={600}>
              Pasar Rebo
            </text>
          </motion.g>
        )}

        {hovered === "makasar" && (
          <motion.g id="labelMakasar" {...labelAnimate(setHovered)}>
            <rect
              x={50}
              y={240}
              width={100}
              height={50}
              rx={25}
              stroke="#efefef"
              fill="#fff"
            />
            <text x={65} y={271} fill="rgba(240, 99, 146, 1)" fontWeight={600}>
              Makasar
            </text>
          </motion.g>
        )}

        {hovered === "kramatjati" && (
          <motion.g id="labelKramatjati" {...labelAnimate(setHovered)}>
            <rect
              x={60}
              y={250}
              width={120}
              height={50}
              rx={25}
              stroke="#efefef"
              fill="#fff"
            />
            <text x={75} y={281} fill="rgba(240, 99, 146, 1)" fontWeight={600}>
              Kramat Jati
            </text>
          </motion.g>
        )}

        {hovered === "cakung" && (
          <motion.g id="labelCakung" {...labelAnimate(setHovered)}>
            <rect
              x={150}
              y={50}
              width={90}
              height={50}
              rx={25}
              stroke="#efefef"
              fill="#fff"
            />
            <text x={165} y={80} fill="rgba(240, 99, 146, 1)" fontWeight={600}>
              Cakung
            </text>
          </motion.g>
        )}

        {hovered === "durenSawit" && (
          <motion.g id="labelDurenSawit" {...labelAnimate(setHovered)}>
            <rect
              x={70}
              y={150}
              width={130}
              height={50}
              rx={25}
              stroke="#efefef"
              fill="#fff"
            />
            <text x={85} y={180} fill="rgba(240, 99, 146, 1)" fontWeight={600}>
              Duren Sawit
            </text>
          </motion.g>
        )}

        {hovered === "pulogadung" && (
          <motion.g id="labelPuloGadung" {...labelAnimate(setHovered)}>
            <rect
              x={180}
              y={80}
              width={130}
              height={50}
              rx={25}
              stroke="#efefef"
              fill="#fff"
            />
            <text x={195} y={110} fill="rgba(240, 99, 146, 1)" fontWeight={600}>
              Pulo Gadung
            </text>
          </motion.g>
        )}

        {hovered === "matraman" && (
          <motion.g id="labelMatraman" {...labelAnimate(setHovered)}>
            <rect
              x={80}
              y={120}
              width={110}
              height={50}
              rx={25}
              stroke="#efefef"
              fill="#fff"
            />
            <text x={95} y={150} fill="rgba(240, 99, 146, 1)" fontWeight={600}>
              Matraman
            </text>
          </motion.g>
        )}

        {hovered === "jatinegara" && (
          <motion.g id="labelJatinegara" {...labelAnimate(setHovered)}>
            <rect
              x={110}
              y={170}
              width={110}
              height={40}
              rx={20}
              stroke="#efefef"
              fill="#fff"
            />
            <text x={125} y={195} fill="rgba(240, 99, 146, 1)" fontWeight={600}>
              Jatinegara
            </text>
          </motion.g>
        )}

        {hovered === "cipayung" && (
          <motion.g id="labelCipayung" {...labelAnimate(setHovered)}>
            <rect
              x={60}
              y={470}
              width={105}
              height={40}
              rx={20}
              stroke="#efefef"
              fill="#fff"
            />
            <text x={75} y={495} fill="rgba(240, 99, 146, 1)" fontWeight={600}>
              Cipayung
            </text>
          </motion.g>
        )}

        {hovered === "ciracas" && (
          <motion.g {...labelAnimate(setHovered)}>
            <rect
              x={60}
              y={470}
              width={85}
              height={40}
              rx={20}
              stroke="#efefef"
              fill="#fff"
            />
            <text x={75} y={495} fill="rgba(240, 99, 146, 1)" fontWeight={600}>
              Ciracas
            </text>
          </motion.g>
        )}
      </AnimatePresence>
    </svg>
  );
};