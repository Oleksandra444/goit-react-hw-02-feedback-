export const Statistic = ({ options, total, positivePercentage }) => { 
    return (
        <ul>
            {options.map(option => <li key={option[0]}><p>{option[0]}<span>{ option[1]}</span></p> </li>)}      

</ul>

    )

}