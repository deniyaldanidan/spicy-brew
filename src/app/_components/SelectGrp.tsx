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

/**
 * 
 * @requires styles/selectGrp.scss the mentioned file needs to imported 
 */

export default function SelectGrp({inpName, changeHandle, inpId, optList}:props) {
    return (
        <div className="selInpGrp">
            <label htmlFor={inpId}>{inpName}</label>
            <select id={inpId} onChange={changeHandle}>
                {
                    optList.map(opt => <option value={opt.value} key={opt.value}>{opt.label}</option>)
                }
            </select>
        </div>
    )
}