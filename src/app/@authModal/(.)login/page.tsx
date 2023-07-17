import dynamic from 'next/dynamic';

const LoginModal = dynamic(() => import("@/app/_components/LoginModal"), {
    ssr: false
});

export default function Page() {
    return <LoginModal />
}