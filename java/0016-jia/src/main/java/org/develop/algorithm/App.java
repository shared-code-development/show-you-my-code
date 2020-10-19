package org.develop.algorithm;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

/**
 * Hello world!
 * 
 * @author heshiyuan
 */
public class App {

    /**
     * args是由小写字母组成的数组
     * 思路： 
     * 1. 分桶：args中一个元素一个桶（hash，或者数组实现）
     * 2. 统计：统计每个桶中每个字母出现的数量
     * 3. 合并：取每个桶中相同字母中的最小值
     */
    public List<String> soluation( String[] args ){
        // 1. 数组实现桶
        return doItByArray(args);
    }
    /**
     * {"bella", "label", "roller"};
     *  [1, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
        [1, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
        [0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 2, 0, 0, 1, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0]
     * @param args
     */
    private List<String> doItByArray(String[] args) {
        char[][] charArray = new char[args.length][26];

        for (int i = 0; i < args.length; i++) {
            char[] firstLine = args[i].toCharArray();
            for (int j = 0; j < firstLine.length; j++) {
                int index = firstLine[j] - 'a';
                charArray[i][index] = (char)(firstLine[index] + 1);
                System.out.println("000=" + charArray[i][index]);
            } 
        }
       
        List<String> returnList = new ArrayList<>();

        // for (int i = 0; i < charArray[0].length; i++) {
        //     int min = Integer.MAX_VALUE;
        //     for (int j = 0; j < args.length; j++) {
        //         if(charArray[j][i]>0 && charArray[j][i] < min){
        //             min = charArray[j][i];
        //         } 
        //     }
        //     if(min == Integer.MAX_VALUE){
        //         continue;
        //     }
        //     for (int j = 0; j < min; j++) {
        //         returnList.add(String.valueOf((char) (min + 'a'))) ;
        //     }
        // }
        return returnList;
    }
}
