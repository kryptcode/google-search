import Head from "next/head";
import { useRouter } from "next/router";
import Header from "../components/Header";
import SearchResults from "../components/SearchResults";

const Search = ({ results }) => {
    const router = useRouter()

    return (
        <div>
            <Head>
                <title>{router.query.term} | Google Search</title>
            </Head>

            <Header />

            <SearchResults results={results} />
        </div>
    )
};

export default Search;

export async function getServerSideProps(context) {
    const startIndex = context.query.start || "0"

    const { term } = context.query

    const data = await fetch (`https://www.googleapis.com/customsearch/v1?key=${process.env.API_KEY}&cx=${process.env.CONTEXT_KEY}&q=${term}&start=${startIndex}`).then(res => res.json())

    return {
        props: {
            results: data,
        }
    }
}