import React from 'react';
import Modal, { Props } from "react-modal"


interface ReactModalAdapterProps extends Props { }

const ReactModalAdapter: React.FC<ReactModalAdapterProps> = ({ className, overlayClassName, ...props }) => {
  return (
    <Modal
      className={className}
      overlayClassName={overlayClassName}
      {...props}
      ariaHideApp={false}
    />
  )
}

export default ReactModalAdapter

