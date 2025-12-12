import * as React from 'react';

export function Card(props: { title: string; description?: string; children?: React.ReactNode }) {
  return (
    <div style={{
      border: '1px solid rgba(127,127,127,0.2)',
      borderRadius: 14,
      padding: 14
    }}>
      <div style={{ fontWeight: 700, marginBottom: 6 }}>{props.title}</div>
      {props.description ? (
        <div style={{ opacity: 0.85, marginBottom: props.children ? 10 : 0 }}>{props.description}</div>
      ) : null}
      {props.children}
    </div>
  );
}
