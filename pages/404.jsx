import MainLayout from "../layouts/MainLayout";
import Link from "next/link";

export default function None() {
    return (
        <MainLayout>
            <div className="full flex column aic jcc h100">
                <h2>Такой страницы не существует!</h2>
                <Link href="/">
                    <div className="btn-def">Вернуться на главную</div>
                </Link>
            </div>
        </MainLayout>
    );
};
