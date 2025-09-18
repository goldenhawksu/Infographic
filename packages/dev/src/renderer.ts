import { Renderer, parseSVG } from '@antv/infographic';

const container = document.getElementById('root');

const str =
  '<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 720 218"><g id="infographic-container" x="0" y="0" width="720" height="218"><g id="title-group" x="0" y="0" width="720" height="88"><g width="720" height="32" id="title"><rect width="720" height="32" fill="none" id="title-bounds" /><text x="360" fill="#212121" font-size="24" text-anchor="middle" dominant-baseline="hanging" data-text-alignment="CENTER TOP" data-align-horizontal="center" data-line-height="1.4" data-width="720" data-height="32" id="title-text">AntV Infographic</text></g><g y="40" width="720" height="48" id="desc"><rect y="40" width="720" height="48" fill="none" id="desc-bounds" /><text x="360" y="40" fill="#666666" font-size="16" text-anchor="middle" dominant-baseline="hanging" data-text-alignment="CENTER TOP" data-align-horizontal="center" data-line-height="1.4" data-width="720" data-height="48" id="desc-text">AntV Infographic is an AI-powered infographic recommendation and generation tool</text></g></g><g x="72" y="88" transform="translate(72, 88)"><g id="items-group"><g id="item-1" y="0"><path id="item-1-shape" x="0" fill="#FEA3BF" width="30" height="30" d="M14.7273 30C6.54538 30 0 22.9077 0 14.7269C0 6.54617 6.54538 0 14.7273 0C22.9092 0 30 6.54617 30 14.7269C30 22.9077 22.9092 30 14.7273 30ZM24.5454 10.9077C22.9092 9.27307 22.9092 9.27307 22.9092 9.27307C22.3638 8.72692 22.3638 8.7269 21.8181 8.7269C21.2727 8.7269 21.2727 8.72692 20.7273 9.27307C13.0908 16.9077 13.0908 16.9077 13.0908 16.9077C8.72731 12.5461 8.72731 12.5462 8.72731 12.5462C8.18193 12.5462 8.18193 12 7.63654 12L7.09077 12.5462C4.90923 14.1808 4.90923 14.1808 4.90923 14.1808C4.90923 14.7269 4.90923 14.7269 4.90923 15.2731C4.90923 15.8192 4.90923 15.8192 4.90923 16.3654C12 23.4539 12 23.4538 12 23.4538C12.5454 23.4538 12.5454 23.4538 13.0908 23.4538C13.6365 23.4538 13.6365 23.4538 14.1819 23.4538C24.5454 12.5461 24.5454 12.5462 24.5454 12.5462L25.0908 12C25.0908 11.4538 24.5454 10.9077 24.5454 10.9077Z" /><g x="35" width="541" height="30" id="item-1-desc"><rect x="35" width="541" height="30" fill="rgba(199, 207, 145, 0.1)" id="item-1-desc-bounds" /><text x="35" y="15" fill="#666" font-size="16" text-anchor="start" dominant-baseline="central" data-text-alignment="LEFT CENTER" data-align-vertical="center" data-line-height="1.4" data-word-wrap="false" data-width="541" data-height="30" id="item-1-desc-text">Flexible visualization rendering engine</text></g></g><g id="item-2" y="50" transform="translate(0, 50)"><path id="item-2-shape" x="0" fill="#FEA3BF" width="30" height="30" d="M14.7273 30C6.54538 30 0 22.9077 0 14.7269C0 6.54617 6.54538 0 14.7273 0C22.9092 0 30 6.54617 30 14.7269C30 22.9077 22.9092 30 14.7273 30ZM24.5454 10.9077C22.9092 9.27307 22.9092 9.27307 22.9092 9.27307C22.3638 8.72692 22.3638 8.7269 21.8181 8.7269C21.2727 8.7269 21.2727 8.72692 20.7273 9.27307C13.0908 16.9077 13.0908 16.9077 13.0908 16.9077C8.72731 12.5461 8.72731 12.5462 8.72731 12.5462C8.18193 12.5462 8.18193 12 7.63654 12L7.09077 12.5462C4.90923 14.1808 4.90923 14.1808 4.90923 14.1808C4.90923 14.7269 4.90923 14.7269 4.90923 15.2731C4.90923 15.8192 4.90923 15.8192 4.90923 16.3654C12 23.4539 12 23.4538 12 23.4538C12.5454 23.4538 12.5454 23.4538 13.0908 23.4538C13.6365 23.4538 13.6365 23.4538 14.1819 23.4538C24.5454 12.5461 24.5454 12.5462 24.5454 12.5462L25.0908 12C25.0908 11.4538 24.5454 10.9077 24.5454 10.9077Z" /><g x="35" width="541" height="30" id="item-2-desc"><rect x="35" width="541" height="30" fill="rgba(199, 207, 145, 0.1)" id="item-2-desc-bounds" /><text x="35" y="15" fill="#666" font-size="16" text-anchor="start" dominant-baseline="central" data-text-alignment="LEFT CENTER" data-align-vertical="center" data-line-height="1.4" data-word-wrap="false" data-width="541" data-height="30" id="item-2-desc-text">Progressive visualization grammar</text></g></g><g id="item-3" y="100" transform="translate(0, 100)"><path id="item-3-shape" x="0" fill="#FEA3BF" width="30" height="30" d="M14.7273 30C6.54538 30 0 22.9077 0 14.7269C0 6.54617 6.54538 0 14.7273 0C22.9092 0 30 6.54617 30 14.7269C30 22.9077 22.9092 30 14.7273 30ZM24.5454 10.9077C22.9092 9.27307 22.9092 9.27307 22.9092 9.27307C22.3638 8.72692 22.3638 8.7269 21.8181 8.7269C21.2727 8.7269 21.2727 8.72692 20.7273 9.27307C13.0908 16.9077 13.0908 16.9077 13.0908 16.9077C8.72731 12.5461 8.72731 12.5462 8.72731 12.5462C8.18193 12.5462 8.18193 12 7.63654 12L7.09077 12.5462C4.90923 14.1808 4.90923 14.1808 4.90923 14.1808C4.90923 14.7269 4.90923 14.7269 4.90923 15.2731C4.90923 15.8192 4.90923 15.8192 4.90923 16.3654C12 23.4539 12 23.4538 12 23.4538C12.5454 23.4538 12.5454 23.4538 13.0908 23.4538C13.6365 23.4538 13.6365 23.4538 14.1819 23.4538C24.5454 12.5461 24.5454 12.5462 24.5454 12.5462L25.0908 12C25.0908 11.4538 24.5454 10.9077 24.5454 10.9077Z" /><g x="35" width="541" height="30" id="item-3-desc"><rect x="35" width="541" height="30" fill="rgba(199, 207, 145, 0.1)" id="item-3-desc-bounds" /><text x="35" y="15" fill="#666" font-size="16" text-anchor="start" dominant-baseline="central" data-text-alignment="LEFT CENTER" data-align-vertical="center" data-line-height="1.4" data-word-wrap="false" data-width="541" data-height="30" id="item-3-desc-text">Simple, easy-to-use, and comprehensive graph visualization engine</text></g></g></g><g id="btns-group" width="0" height="0"><rect id="btn-remove-1" fill="#F9C0C0" fill-opacity="0.3" width="20" height="20" x="-30" y="5" /><rect id="btn-add-1" fill="#B9EBCA" fill-opacity="0.3" width="20" height="20" x="278" y="-20" /><rect id="btn-remove-2" fill="#F9C0C0" fill-opacity="0.3" width="20" height="20" x="-30" y="55" /><rect id="btn-add-2" fill="#B9EBCA" fill-opacity="0.3" width="20" height="20" x="278" y="30" /><rect id="btn-remove-3" fill="#F9C0C0" fill-opacity="0.3" width="20" height="20" x="-30" y="105" /><rect id="btn-add-3" fill="#B9EBCA" fill-opacity="0.3" width="20" height="20" x="278" y="80" /><rect id="btn-add-4" fill="#B9EBCA" fill-opacity="0.3" width="20" height="20" x="278" y="130" /></g></g></g></svg>';

const template = parseSVG(str);

const renderer = new Renderer(
  {
    container,
    width: 800,
    height: 600,
    padding: 20,
    design: {},
    data: {
      title: 'AntV Infographic',
      desc: 'AntV Infographic is an AI-powered infographic recommendation and generation tool',
      items: [
        { label: 'AntV G', desc: 'Flexible visualization rendering engine' },
        { label: 'AntV G2', desc: 'Progressive visualization grammar' },
        {
          label: 'AntV G6',
          desc: 'Simple, easy-to-use, and comprehensive graph visualization engine',
        },
      ],
    },
    themeConfig: {
      palette: [
        '#1783FF',
        '#00C9C9',
        '#F0884D',
        '#D580FF',
        '#7863FF',
        '#60C42D',
        '#BD8F24',
        '#FF80CA',
        '#2491B3',
        '#17C76F',
        '#70CAF8',
      ],
    },
  },
  template,
);

const infographic = renderer.render();

container.appendChild(infographic);
