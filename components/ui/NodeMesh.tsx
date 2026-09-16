export function NodeMesh({ className }: { className?: string }) {
  const nodes = [
    [60, 40], [220, 90], [380, 30], [520, 110], [680, 50],
    [140, 180], [300, 220], [460, 170], [620, 230], [780, 160],
    [80, 320], [260, 350], [420, 300], [580, 360], [740, 300],
  ];
  const edges: [number, number][] = [
    [0, 1], [1, 2], [2, 3], [3, 4], [1, 5], [5, 6], [6, 7], [7, 8], [8, 9],
    [5, 10], [6, 11], [7, 12], [8, 13], [9, 14], [10, 11], [11, 12], [12, 13], [13, 14],
    [0, 5], [3, 8],
  ];

  return (
    <svg
      viewBox="0 0 840 400"
      className={className}
      aria-hidden="true"
      preserveAspectRatio="xMidYMid slice"
    >
      {edges.map(([a, b], i) => (
        <line
          key={i}
          x1={nodes[a][0]}
          y1={nodes[a][1]}
          x2={nodes[b][0]}
          y2={nodes[b][1]}
          stroke="#A9A6A1"
          strokeWidth="0.5"
          opacity="0.25"
        />
      ))}
      {nodes.map(([x, y], i) => (
        <circle key={i} cx={x} cy={y} r={i % 4 === 0 ? 3 : 1.75} fill={i % 4 === 0 ? '#A855F7' : '#E5E4E2'} opacity={i % 4 === 0 ? 0.8 : 0.4} />
      ))}
    </svg>
  );
}
