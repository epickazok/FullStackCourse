FilePond.registerPlugin (
    FilePondPluginImagePreview,
    FilePondPluginImageResize,
    FilePondPluginFileEncode,
)

FilePond.setOptions({
    stylePanelAspectRatio: 150 / 100,
    imageResizeTargetwidth: 100,
    imageResizeTargetheight: 150
})

FilePond.parse(document.body);