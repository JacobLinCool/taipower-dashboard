async function get_data() {
    let data = await fetch(`https://taipower-api.jacob.workers.dev/`).then((r) => r.json());
    return data;
}

export { get_data };
