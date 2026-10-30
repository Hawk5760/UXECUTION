import * as React from "react";

interface LoaderProps {
  size?: number;
  text?: string;
}

export const Component: React.FC<LoaderProps> = ({
  size = 180,
  text = "Building",
}) => (
  <div className="ca-building-loader" role="status" aria-label={text}>
    <div
      className="ca-building-loader__content"
      style={{ width: size, height: size }}
    >
      <div className="ca-building-loader__letters" aria-hidden="true">
        {text.split("").map((letter, index) => (
          <span
            key={index}
            className="ca-building-loader__letter"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            {letter}
          </span>
        ))}
      </div>
      <div className="ca-building-loader__circle" aria-hidden="true" />
    </div>
  </div>
);
