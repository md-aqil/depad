export default function Loading({ state }) {
    if (state) {
        return <h1>Loading....</h1>;
    }
    return null;
}
