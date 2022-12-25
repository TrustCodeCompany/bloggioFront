export const CardImgGradient = ({ imgPath, url, date, title, nameClass }) => {
    return (
        <a href={url} className={nameClass}>
            <div
                className="featured-img"
                style={{
                    backgroundImage: `url(${imgPath})`,
                }}></div>

            <div className="text">
                <span className="date">{date}</span>
                <h2>{title}</h2>
            </div>
        </a>
    );
}