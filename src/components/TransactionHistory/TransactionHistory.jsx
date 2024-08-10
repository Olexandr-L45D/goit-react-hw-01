import css from "./TransactionHistory.module.css"
import TransactionItem from "../TransactionItem/TransactionItem"

export default function TransactionHistory({ items }) {
    return (
        <div className={css.container}>

            <div className={css.tables}>

                <li className={css.tabl}>
                    <p className={css.title}>Type</p>
                    <p className={css.title}>Amount</p>
                    <p className={css.title}>Currency</p>
                </li>


                <div className={css.list}>
                    {items.map((item) => {
                        return (
                            <div className={css.item} key={item.id}>
                                <TransactionItem item={item} />
                            </div>);
                    })}

                </div>

            </div>

        </div>


    );
}

