function CardAdv({ title, description, additionalText, imageSrc, altText, iconClass }) {
    return (
        <div className="card">
            <h3 className="headerblock-advblock">{title}</h3>
            <p className="textmain-advblock">{description}</p>
            {additionalText && <p className="text-advblock">{additionalText}</p>}
            <img src={imageSrc} alt={altText} className={iconClass} />
        </div>
    );
}

export default CardAdv;
