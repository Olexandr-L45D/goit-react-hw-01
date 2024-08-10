import css from "./TransactionHistory.module.css"
import TransactionItem from "../TransactionItem/TransactionItem"

export default function TransactionHistory({ items }) {
    return (
        <div className={css.container}>

            <table className={css.tables}>
                <thead >
                    <tr className={css.tabl}>
                        <th className={css.title}>Type</th>
                        <th className={css.title}>Amount</th>
                        <th className={css.title}>Currency</th>
                    </tr>
                </thead>

                <tbody className={css.list}>
                    {items.map((item) => {
                        return (
                            <tr className={css.item} key={item.id}>
                                <TransactionItem item={item} />
                            </tr>);
                    })}

                </tbody>

            </table>

        </div>


    );
}

