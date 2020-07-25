import React from 'react';
import { Color } from '../components';

interface Props {
  children: any,
  icon?: string,
  color?: Color
}

export function Alert({ color = Color.Danger, children, icon = "warning" }: Props) {
  return (
    <div className={`alert bg-${color}`}>
      <span className="material-icons alert__icon">
        {icon}
      </span>
      <div className="alert__text">
        {children}
      </div>
      <span className="material-icons alert__close">
        close
      </span>
    </div>
  )
}
