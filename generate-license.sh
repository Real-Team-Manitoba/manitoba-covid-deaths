convert \
    blank-license.jpg \
    -font sticker.ttf \
    -pointsize 160 \
    -draw "rotate 8 text 3345,1093 '193'" \
    -pointsize 35 \
    -fill white \
    -draw "rotate 8 text 3214,1155 'DEATHS AS OF NOV 19, 2020'" \
    generated-license-$(jq -r .date deaths.json).jpg