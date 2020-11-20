convert \
    blank-license.jpg \
    -font sticker.ttf \
    -pointsize 160 \
    -draw "rotate 8 text 3345,1093 '$(jo -r .deaths deaths.json)'" \
    -pointsize 35 \
    -fill white \
    -draw "rotate 8 text 3214,1155 '$(jq -r .stickerDate deaths.json)'" \
    generated-license-$(jq -r .date deaths.json).jpg