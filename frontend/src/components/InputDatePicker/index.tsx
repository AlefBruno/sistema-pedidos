import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./style.css";

function InputDatePicker(props: { dateInit: Date | null | undefined; updateDate: (arg0: Date) => void; }) {
  return (
    <div className="dsmeta-form-control-container">
      <DatePicker
          selected={props.dateInit}
          onChange={(date: Date) => {props.updateDate(date)}}
          className="dsmeta-form-control"
          dateFormat="dd/MM/yyyy"
      />
</div>
  );
}
export default InputDatePicker;
