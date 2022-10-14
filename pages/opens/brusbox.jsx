import MainLayout from "../../layouts/MainLayout";
import Link from "next/link";

export default function Brusbox() {
    return (
        <MainLayout>
            <div className="content">
                <div className="title">Окна Brusbox</div>
            </div>
            <div className="content">
                <Link href="/opens/brusbox/glide">
                    <div className="f3 card h100 jcsb">
                        <h3 className="tac">
                            Glide
                        </h3>
                        <img src="../static/opens/brusbox/brusbox_glide-mini.png" alt="" />
                    </div>
                </Link>
                <Link href="/opens/brusbox/super-aero">
                    <div className="s3 card h100 jcsb">
                        <h3 className="tac">
                            Super Aero
                        </h3>
                        <img src="/static/opens/brusbox/brusbox_super-aero-mini.png" alt="" />
                    </div>
                </Link>
                <Link href="/opens/brusbox/aero">
                    <div className="t3 card h100 jcsb">
                        <h3 className="tac">
                            Aero
                        </h3>
                        <img src="/static/opens/brusbox/brusbox_aero-mini.png" alt="" />
                    </div>
                </Link>
                <Link href="/opens/brusbox/70-6">
                    <div className="f3 card h100 jcsb">
                        <h3 className="tac">
                            70-6
                        </h3>
                        <img src="/static/opens/brusbox/brusbox_70-6-mini.png" alt="" />
                    </div>
                </Link>
                <Link href="/opens/brusbox/aclass">
                    <div className="s3 card h100 jcsb">
                        <h3 className="tac">
                            Aclass
                        </h3>
                        <img src="/static/opens/brusbox/brusbox_aclass-mini.png" alt="" />
                    </div>
                </Link>
                <Link href="/opens/brusbox/60-4">
                    <div className="t3 card h100 jcsb">
                        <h3 className="tac">
                            60-4
                        </h3>
                        <img src="/static/opens/brusbox/brusbox_60-4-mini.png" alt="" />
                    </div>
                </Link>
            </div>
        </MainLayout>
    );
};
