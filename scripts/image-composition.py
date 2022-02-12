#!/usr/bin/env python3

import os
import cv2
import numpy as np

ranklist = list(filter(
    lambda x: x.endswith('.png'),
    os.listdir(path='./public/rank')
))
charlist = list(filter(
    lambda x: x.endswith('.png'),
    os.listdir(path='./public/character')
))

if not os.path.exists('./public/rankandchar'):
    os.mkdir('./public/rankandchar')

rankimgs = {}
charimgs = {}
for rank in ranklist:
    rankimgs[rank] = cv2.imread('./public/rank/' + rank, -1)
for char in charlist:
    charimgs[char] = cv2.imread('./public/character/' + char, -1)

height = 280
width = 280

for rank, rankimg in rankimgs.items():
    resize_rank_img = np.zeros((height, width, 4))
    rankimg = rankimg[40:,:]
    img_height, img_width = rankimg.shape[:2]
    img_space = int((width - img_width)/2)
    resize_rank_img[0:img_height, img_space:(img_width + img_space)] = rankimg

    for char, charimg in charimgs.items():
        resize_char_img = np.zeros((height, width, 4))
        img_height, img_width = charimg.shape[:2]
        img_space = int((width - img_width)/2)
        resize_char_img[(height - img_height):height,
                        img_space:(img_width + img_space)] = charimg

        src2 = resize_rank_img
        src1 = resize_char_img
        img = src1[:, :, :] * (1 - src2[:, :, 3:]/255) + \
            src2[:, :, :] * (src2[:, :, 3:]/255)

        print('creating... ' + rank + ' ' + char)
        fname = rank.split('.')[0] + '-' + char.split('.')[0]
        cv2.imwrite('public/rankandchar/' + fname + '.png', img)
