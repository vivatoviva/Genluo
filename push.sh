#!/bin/bash

clear

usage() {
    # 帮助
    echo "
-c | commit : 进行一次commit

-g | githu: 将项目推送至github

-h | help : 帮助
    "
    return
}

pushGithub() {
    # 向github推送最新代码
    if [ !-n $1] ; then
        echo ""
        exit
    fi
    git add .
    git commit -m "$1"
    git push github
    return
}

commit() {
    # 进行一次commit、
    if [ !-n $1] ; then
        echo ""
        exit
    fi
    git add .
    git commit -m "$1"
    return
}

while [[ -n $1 ]]; do
    case $1 in
                -c | commit) shift
                             commit $1
                             ;;
                -h | help) usage
                            exit
                            ;;
                -g | github) shift
                            pushGithub $1
                            ;;
                *) usage
                    exit 1
                    ;;
    esac
    shift
done


# if [ ! -n "$1" ] ;then
#     echo "you have not input a word!"
#     exit 0
# fi

# git add .
# git commit -m "$1"