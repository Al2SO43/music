document.addEventListener('DOMContentLoaded', function () {
    function handlePlaylist1() {
        fetch('https://meting.qjqq.cn/?type=playlist&id=3778678')
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
                    container: document.getElementById('aplayer1'),
                    audio: audioList,
                    lrcType: 3
                };

                const ap = new APlayer(options);
            })
            .catch(error => {
                console.error('Error fetching the playlist from meting.qjqq.cn (ID 3778678):', error);
            });
    }

    function handlePlaylist2() {
        fetch('https://meting.qjqq.cn/?type=playlist&id=3779629')
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
                    container: document.getElementById('aplayer2'),
                    audio: audioList,
                    lrcType: 3
                };

                const ap = new APlayer(options);
            })
            .catch(error => {
                console.error('Error fetching the playlist from meting.qjqq.cn (ID 3779629):', error);
            });
    }

    function handlePlaylist3() {
        fetch('https://meting.qjqq.cn/?type=playlist&id=19723756')
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
                    container: document.getElementById('aplayer3'),
                    audio: audioList,
                    lrcType: 3
                };

                const ap = new APlayer(options);
            })
            .catch(error => {
                console.error('Error fetching the playlist from meting.qjqq.cn (ID 19723756):', error);
            });
    }

    function handlePlaylist4() {
        fetch('https://api.crowya.com/meting/?type=playlist&id=913908853')
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
                    container: document.getElementById('aplayer4'),
                    audio: audioList,
                    lrcType: 3
                };

                const ap = new APlayer(options);
            })
            .catch(error => {
                console.error('Error fetching the playlist from api.crowya.com (ID 913908853):', error);
            });
    }

    function handlePlaylist5() {
        fetch('https://api.crowya.com/meting/?type=playlist&id=2003672301')
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
                    container: document.getElementById('aplayer5'),
                    audio: audioList,
                    lrcType: 3
                };

                const ap = new APlayer(options);
            })
            .catch(error => {
                console.error('Error fetching the playlist from api.crowya.com (ID 2003672301):', error);
            });
    }

    function handlePlaylist6() {
        fetch('https://api.crowya.com/meting/?type=playlist&id=64321632')
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
                    container: document.getElementById('aplayer6'),
                    audio: audioList,
                    lrcType: 3
                };

                const ap = new APlayer(options);
            })
            .catch(error => {
                console.error('Error fetching the playlist from api.crowya.com (ID 64321632):', error);
            });
    }

    function handlePlaylist7() {
        fetch('https://api.loneapex.cn/?type=playlist&id=26467411')
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
                    container: document.getElementById('aplayer7'),
                    audio: audioList,
                    lrcType: 3
                };

                const ap = new APlayer(options);
            })
            .catch(error => {
                console.error('Error fetching the playlist from api.loneapex.cn (ID 26467411):', error);
            });
    }

    function handlePlaylist8() {
        fetch('https://api.loneapex.cn/?type=playlist&id=947776380')
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
                    container: document.getElementById('aplayer8'),
                    audio: audioList,
                    lrcType: 3
                };

                const ap = new APlayer(options);
            })
            .catch(error => {
                console.error('Error fetching the playlist from api.loneapex.cn (ID 947776380):', error);
            });
    }

    function handlePlaylist9() {
        fetch('https://api.loneapex.cn/?type=playlist&id=2036189106')
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
                    container: document.getElementById('aplayer9'),
                    audio: audioList,
                    lrcType: 3
                };

                const ap = new APlayer(options);
            })
            .catch(error => {
                console.error('Error fetching the playlist from api.loneapex.cn (ID 2036189106):', error);
            });
    }

    handlePlaylist1();
    handlePlaylist2();
    handlePlaylist3();
    handlePlaylist4();
    handlePlaylist5();
    handlePlaylist6();
    handlePlaylist7();
    handlePlaylist8();
    handlePlaylist9();
});

function displayTime() {
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false, timeZone: 'Asia/Shanghai' };
    const beijingTime = new Date().toLocaleString('zh-CN', options);
    document.getElementById('datetime').textContent = beijingTime;
}

setInterval(displayTime, 1000);
displayTime();
