export default function (doc) {
    if (doc.type === 'pagina') {

        return '/' + doc.uid;
    }

    return '/pagina-niet-gevonden';
}
