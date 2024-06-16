
import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contactsSlice";
import { ImUser, ImPhone } from "react-icons/im";
import css from './Contact.module.css';

export default function Contact({ contact: { id, name, number } }) {
  const dispatch = useDispatch();
  return (
    <div className={css.listItem}>
          <div className={css.box}>
            <span><ImUser />{name}</span>
            <span><ImPhone />{number}</span>
          </div>
      <button
        type="button"
        className={css.btn}
        onClick={() => dispatch(deleteContact(id))}
      >
        Delete
      </button>
    </div>
  );
}