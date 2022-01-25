// Colored background block the interactions of others

function Backdrop(props) {
  return <div className="backdrop" onClick={props.onCancel} />;
}

export default Backdrop;
