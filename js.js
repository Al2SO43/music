document.addEventListener('DOMContentLoaded', function () {
    const apiUrls = [
        'https://api.injahow.cn/meting/?type=playlist&id=3778678',
        'https://api.injahow.cn/meting/?type=playlist&id=3779629',
        'https://api.injahow.cn/meting/?type=playlist&id=19723756',
        'https://api.injahow.cn/meting/?type=playlist&id=913908853',
        'https://api.injahow.cn/meting/?type=playlist&id=2003672301',
        'https://api.injahow.cn/meting/?type=playlist&id=64321632',
        'https://api.injahow.cn/meting/?type=playlist&id=26467411',
        'https://api.injahow.cn/meting/?type=playlist&id=947776380',
        'https://api.injahow.cn/meting/?type=playlist&id=2036189106',
    ];

    apiUrls.forEach((apiUrl, index) => {
        fetch(apiUrl)
            .then(response => response.json())
            .then(data => {
                const audioList = data.map(item => ({
                    name: item.name,
                    artist: item.artist,
                    url: item.url.replace(/\\/g, ''),
                    pic: item.pic.replace(/\\/g, ''),
                    lrc: item.lrc.replace(/\\/g, '')
                }));

                const options = {
                    container: document.getElementById(`aplayer${index + 1}`),
                    audio: audioList,
                    lrcType: 3
                };

                const ap = new APlayer(options);
            })
            .catch(error => {
                console.error('Error fetching the playlist:', error);
            });
    });
});
