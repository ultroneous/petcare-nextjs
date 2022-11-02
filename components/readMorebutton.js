import { Button } from "react-bootstrap";
// import style from "@/styles/components/readMorebutton.module.css";
const ReadMorebutton = (props) => {
  return <Button style={props.style}>{props.text}</Button>;
};

export default ReadMorebutton;
