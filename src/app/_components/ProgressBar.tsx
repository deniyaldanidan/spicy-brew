

type props = {
    trackColor: string,
    progress: number,
    progressColor: string
}

export default function ProgressBar(props:props) {
    return (
        <div style={{
            width: "100%",
            height: "100%",
            backgroundColor: props.trackColor,
            overflow: "hidden",
            padding: 0,
            borderRadius: "5px"
        }}>
            <div style={{
                width: `${props.progress}%`,
                height: "100%",
                backgroundColor: props.progressColor
            }}></div>
        </div >
    )
}