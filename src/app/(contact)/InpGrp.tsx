import { HTMLInputTypeAttribute } from "react"

type inpProps = {
    inpId: string,
    inpLabel: string,
    inpType: "input" | "textarea",
    inpName: string,
    placeholder?:string,
    type: HTMLInputTypeAttribute,
    required?: true
}

type selectProps = {
    inpId: string,
    inpLabel: string,
    inpName: string,
    inpType: "select",
    placeholder?: string,
    optsList: {label: string, value: string}[],
    required?: true
}


export default function InpGrp(props:inpProps | selectProps){
    return (
        <div className="contact-inp-grp">
            <label htmlFor={props.inpId}>{props.inpLabel}</label>
            {
                props.inpType==="input" ? (
                    <input type={props.type} id={props.inpId} name={props.inpName} placeholder={props.placeholder} required={props.required} />
                ) :  ""
            }

            {
                props.inpType==="select" ? (
                    <select id={props.inpId} name={props.inpName} required={props.required}>
                        {
                            props.optsList.map(opt=><option value={opt.value} key={opt.value}>{opt.label}</option>)
                        }
                    </select>
                ) : ""
            }

            {
                props.inpType==="textarea" ? (
                    <textarea id={props.inpId} name={props.inpName} required={props.required} placeholder={props.placeholder}></textarea>
                ) : ""
            }
        </div>
    )
}