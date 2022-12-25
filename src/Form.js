import {useFormik} from 'formik';



const Form = () => {

    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            amount: 0,
            currency: '',
            text: '',
            terms: false
        },
        onSubmit: values => console.log(JSON.stringify(values, null, 2)) // данная конструкция превращает поступивший объект(values) в строку в нормальном формате . Если мы попробуем объект превратить в строку, то получим Object object
    //   console.log(JSON.stringify({ x: 5, y: 6 }));
    // expected output: "{"x":5,"y":6}"
    //
    //console.log(JSON.stringify([new Number(3), new String('false'), new Boolean(false)]));
    // expected output: "[3,"false",false]"
    
    //console.log(JSON.stringify({ x: [10, undefined, function(){}, Symbol('')] }));
    // expected output: "{"x":[10,null,null,null]}"
    
    //console.log(JSON.stringify(new Date(2006, 0, 2, 15, 4, 5)));
    // expected output: ""2006-01-02T15:04:05.000Z""
    
    })

    return (
        <form className="form" onSubmit={formik.handleSubmit}>
            <h2>Отправить пожертвование</h2>
            <label htmlFor="name">Ваше имя</label>
            <input
                id="name"
                name="name"
                type="text"
                value={formik.values.name}
                onChange={formik.handleChange}//теперь, когда мы будем что-то печатать в этот input, у нас будет вызываться функция handleChange(которая встроена в formik) и будет смотреть, какой инпут у нас изменяется. Потом у нас идёт обратная связь и это значение будет попадать обратно в value. Поэтому handleChange настроен у нас так, чтобы изменять и state и значение инпута
            />
            <label htmlFor="email">Ваша почта</label>
            <input
                id="email"
                name="email"
                type="email"
                value={formik.values.email}
                onChange={formik.handleChange}
            />
            <label htmlFor="amount">Количество</label>
            <input
                id="amount"
                name="amount"
                type="number"
                value={formik.values.amount}
                onChange={formik.handleChange}
            />
            <label htmlFor="currency">Валюта</label>
            <select
                id="currency"
                name="currency"
                value={formik.values.currency}
                onChange={formik.handleChange}>
                    <option value="">Выберите валюту</option>
                    <option value="USD">USD</option>
                    <option value="UAH">UAH</option>
                    <option value="RUB">RUB</option>
            </select>
            <label htmlFor="text">Ваше сообщение</label>
            <textarea 
                id="text"
                name="text"
                value={formik.values.text}
                onChange={formik.handleChange}
            />
            <label className="checkbox">
                <input 
                name="terms" 
                type="checkbox"
                value={formik.values.terms}
                onChange={formik.handleChange} />
                Соглашаетесь с политикой конфиденциальности?
            </label>
            <button type="submit">Отправить</button>
        </form>
    )
}

export default Form;