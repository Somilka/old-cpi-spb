import MainLayout from "../layouts/MainLayout";
import Link from "next/link";
import { useRouter } from 'next/router'

export default function None() {
    const router = useRouter()

    return (
        <MainLayout>
            <div className="full flex column aic jcc h100">
                <h2>Такой страницы не существует!</h2>
                <div className="btn-def" onClick={() => router.back()}>Вернуться назад</div>
                <p>или</p>
                <Link href="/">
                    <div className="btn-def">Вернуться на главную</div>
                </Link>
            </div>
        </MainLayout>
    );
};
