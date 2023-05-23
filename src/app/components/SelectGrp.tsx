import { ChangeEventHandler } from "react"


type props = {
    inpName: string,
    changeHandle: ChangeEventHandler<HTMLSelectElement>,
    inpId: string,
    optList: {
        label: string,
        value: string
    }[]
}

export default function SelectGrp({inpName, changeHandle, inpId, optList}:props) {
    return (
        <div className="inpGrp">
            <label htmlFor={inpId}>{inpName}</label>
            <select id={inpId} onChange={changeHandle}>
                {
                    optList.map(opt => <option value={opt.value} key={opt.value}>{opt.label}</option>)
                }
            </select>
        </div>
    )
}