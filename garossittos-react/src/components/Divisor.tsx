const CURVAS: Record<"arriba" | "abajo", string> = {
  arriba: "M0 13 Q 30 2, 60 13 T 120 13 T 180 13 T 240 13 T 300 13 T 360 13 T 420 13 T 480 13 T 540 13 T 600 13 T 660 13 T 720 13 T 780 13 T 840 13 T 900 13 T 960 13 T 1020 13 T 1080 13 T 1140 13 T 1200 13",
  abajo: "M0 13 Q 30 24, 60 13 T 120 13 T 180 13 T 240 13 T 300 13 T 360 13 T 420 13 T 480 13 T 540 13 T 600 13 T 660 13 T 720 13 T 780 13 T 840 13 T 900 13 T 960 13 T 1020 13 T 1080 13 T 1140 13 T 1200 13",
};

interface DivisorProps {
  color?: string;
  direccion?: "arriba" | "abajo";
}

export default function Divisor({ color = "#B33F23", direccion = "arriba" }: DivisorProps) {
  return (
    <div className="divisor-hilo">
      <svg preserveAspectRatio="none" viewBox="0 0 1200 26">
        <path
          d={CURVAS[direccion]}
          fill="none"
          stroke={color}
          strokeWidth={2}
          strokeDasharray="1 9"
          strokeLinecap="round"
        />
      </svg>
    </div>
  );
}
