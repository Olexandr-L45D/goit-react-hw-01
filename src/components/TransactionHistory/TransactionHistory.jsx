import css from "./TransactionHistory.module.css"

export default function TransactionHistory({
    items: { type, amount, currency } },
) {
    return (
        <div className={css.container}>

            <table className={css.tables}>
                <thead>
                    <tr>
                        <th className={css.title}>Type</th>
                        <th className={css.title}>Amount</th>
                        <th className={css.title}>Currency</th>
                    </tr>
                </thead>

                <tbody className={css.list}>
                    <tr className={css.item}>
                        <td className={css.titleText}>Invoice {type} </td>
                        <td className={css.itemTextdata}>125 {amount} </td>
                        <td className={css.itemText}>USD {currency} </td>
                    </tr>
                    <tr className={css.item}>
                        <td className={css.titleText}>Withdrawal {type} </td>
                        <td className={css.itemTextdata}>85 {amount} </td>
                        <td className={css.itemText}>USD {currency} </td>
                    </tr>
                </tbody>
            </table>

        </div>


    );
}
