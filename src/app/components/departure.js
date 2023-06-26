import Link from "next/link";

export default function Departure() {
    return (
        <div className="input-field">
            <h1 className='font-sans text-center'>Where from?</h1>
            <input className="" type="text"/>
            <Link href={{
                pathname: '/destination',
                query: {name: 'test'}
            }}>
                <div className="button">Proceed!</div>
            </Link>
        </div>
    )
}