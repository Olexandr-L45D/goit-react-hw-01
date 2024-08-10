import css from "./TransactionItem.module.css"

export default function TransactionItem({
    item: { type, amount, currency } },
) {
    return (
        <div className={css.container}>

            <ul className={css.list}>
                <li className={css.item}>
                    <p className={css.titleText}> {type} </p>
                    <p className={css.itemTextdata}> {amount} </p>
                    <p className={css.itemText}> {currency} </p>
                </li>
            </ul>

        </div>
    );
}


