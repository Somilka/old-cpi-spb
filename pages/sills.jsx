import MainLayout from "../layouts/MainLayout";
import Link from "next/link";

export default function Sills() {
    return (
        <MainLayout>
            <div className="content">
                <div className="title">Подоконники</div>
                
            </div>
            <div className="content sills">
            <div className="full flex jcc aic">
                    <Link href="/sills/brusbox">
                        <div className="category big">
                            <img src="/static/sills/sills_brusbox.png" alt="" className="category-img" />
                            <div className="category-name">Подоконник BRUSBOX</div>
                        </div>
                    </Link>
                    <Link href="/sills/stone">
                        <div className="category big">
                            <img src="/static/sills/sills_stone.png" alt="" className="category-img" />
                            <div className="category-name">Каменные подоконники</div>
                        </div>
                    </Link>
                </div>
            </div>
        </MainLayout>
    )
}