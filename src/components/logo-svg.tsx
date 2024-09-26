import { useTheme } from "next-themes"

interface LogoProps {
  width?: string
  height?: string
}

const Logo: React.FC<LogoProps> = ({ width = "25", height = "25" }) => {
  const { resolvedTheme } = useTheme()

  const isDarkMode = resolvedTheme === "dark" 

  return (
    <div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={width}
        height={height}
        viewBox="0 0 60 60"
        className="mr-2"
      >
        <g
          transform="translate(0.000000,60.000000) scale(0.100000,-0.100000)"
          fill="#FFFFFF"
          className={`rounded-sm ${isDarkMode ? "fill-white" : "fill-black"}`}
          stroke="none"
        >
          <path
            d="M210 595 c0 -2 11 -15 24 -28 34 -34 98 -34 133 0 29 29 24 40 -9 21
-31 -17 -89 -18 -113 -2 -19 14 -35 18 -35 9z"
          />
          <path
            d="M121 559 c-19 -18 -21 -29 -19 -82 2 -33 8 -62 14 -64 7 -2 9 17 6
55 -4 51 -1 62 18 80 12 11 17 22 12 26 -5 3 -19 -4 -31 -15z"
          />
          <path
            d="M446 572 c-3 -5 4 -16 16 -26 17 -15 20 -26 16 -77 -3 -39 -1 -58 6
-56 12 4 20 89 12 121 -6 23 -42 50 -50 38z"
          />
          <path
            d="M250 521 c-20 -4 -41 -11 -48 -15 -30 -18 -4 -25 98 -25 61 0 110 4
110 9 0 24 -99 43 -160 31z"
          />
          <path
            d="M190 453 c-33 -12 -40 -36 -40 -143 0 -92 3 -113 23 -150 13 -25 37
-51 57 -61 73 -40 158 -13 197 61 20 37 23 58 23 155 0 131 -3 136 -86 143
l-54 4 0 -156 c0 -97 -4 -156 -10 -156 -6 0 -10 58 -10 155 l0 155 -42 -1
c-24 0 -50 -3 -58 -6z"
          />
          <path
            d="M76 305 c-9 -14 -26 -25 -37 -25 -11 0 -17 -4 -14 -10 11 -18 44 -10
61 15 9 14 23 25 30 25 8 0 14 5 14 10 0 20 -38 9 -54 -15z"
          />
          <path
            d="M470 320 c0 -5 6 -10 14 -10 7 0 21 -11 30 -25 17 -25 50 -33 61 -15
3 6 -3 10 -14 10 -11 0 -28 11 -37 25 -16 24 -54 35 -54 15z"
          />
          <path
            d="M118 204 c-27 -26 8 -139 56 -183 35 -32 33 -21 -5 33 -23 31 -33 60
-38 101 -3 31 -9 53 -13 49z"
          />
          <path
            d="M467 153 c-4 -41 -15 -69 -36 -100 -38 -53 -39 -64 -5 -32 35 32 64
95 64 141 0 59 -17 53 -23 -9z"
          />
        </g>
      </svg>
    </div>
  )
}

export default Logo
