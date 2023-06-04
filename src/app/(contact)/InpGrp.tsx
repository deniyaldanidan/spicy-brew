
type inpProps = {
    inpId: string,
    inpLabel: string,
    inpType: "input" | "textarea",
    inpName: string,
    placeholder?:string
}

type selectProps = {
    inpId: string,
    inpLabel: string,
    inpName: string,
    inpType: "select",
    placeholder?: string,
    optsList: {label: string, value: string}[]
}


export default function InpGrp(props:inpProps | selectProps){
    return (
        <div className="contact-inp-grp">
            <label htmlFor={props.inpId}>{props.inpLabel}</label>
            {
                props.inpType==="input" ? (
                    <input type="text" id={props.inpId} name={props.inpName} placeholder={props.placeholder} />
                ) :  ""
            }

            {
                props.inpType==="select" ? (
                    <select id={props.inpId} name={props.inpName}>
                        {
                            props.optsList.map(opt=><option value={opt.value} key={opt.value}>{opt.label}</option>)
                        }
                    </select>
                ) : ""
            }

            {
                props.inpType==="textarea" ? (
                    <textarea id={props.inpId} name={props.inpName} placeholder={props.placeholder} ></textarea>
                ) : ""
            }
        </div>
    )
}