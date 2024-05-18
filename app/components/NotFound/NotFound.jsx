import Styles from "./NotFound.module.css";
export const NotFound = () => {
    return (
        <div className={Styles["color-wrapper"]}>
        <div className={Styles["error-contain"]}>
	<div className={Styles["error-text"]}>
		<h1>404</h1>
		<p>Страница не найдена.</p>
		<p>Мы искали высоко и низко.</p>
	</div>
	<div className={Styles["binoculars"]}>
		<div className={Styles["back-bino"]}></div>
		<div className={Styles["left-bino"]}></div>
		<div className={Styles["right-bino"]}></div>
		<div className={Styles["left-bino-lense"]}>
			<div className={Styles["eye"]}></div>
		</div>
		<div className={Styles["right-bino-lense"]}>
			<div className={Styles["eye"]}></div>
		</div>
	</div>
</div></div>
    )
}



