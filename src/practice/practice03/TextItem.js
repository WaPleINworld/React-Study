

function TextItem({Num, Content}) {

    return (
        <div className='textItem'>
        <p className='Num'>제목 : {Num}</p>
        <p>내용 : {Content}</p>
        </div>
    )

}

export default TextItem;