## Problem 1

Given Array A and a number N, find the first pair in list A such that it sums up to N. Print index of the first pair as output. (Index starts from 0). In case no pair is found, return (-1, -1).
Input: A = [3, 6 , 9, 12, 4]. N=16
Output: (3, 4)

Tar = 16
Diff = tar - arr[i]
16-3 = 13 (0)
16-6= 10
7
4
12

Map = <arr[i], i> <3,0> <6,1> <9,2> <12,3> return 4,3 map.set(key=12, i=1)

[12,12,4] N=16

<12,0> <12,1> 0,2

 [3, 6 ,11,6,5 9, 12, 4]. N=16

[6,5,7,3,2, 2] t=8
(4,4)(5,3)
<4,0>
<5,1>
<7,2>get
<3,3>
<2,4>
<2,5>??

<4, [0, null]> -> <4, [0,4]> 
<5, [1,null]>  -> <5, [1, 3]>

<4,4>
<5,3>
<7,1>

For
4
dif=4
arr.lastindexOf(diff) >-1


Dif = 8-4 = 4 map.has(4)
8-6 2 


[4,6,4] t=8

Map ={ 4: 0, 6:1}


[6,5,4,2,2] t=8

6,0  2  3  [3,0]
5,1
4,2
2,3

—-----
//handles duplicate elements
//make sure to return 1st pair

getSum = function(arr, tar){
Let map = new Map();
for(i=0to arr.length-1)
{
	map.set(arr[i] , i)
}

for(j=0 to arr.length-1)
{
	Diff = t-arr[j]
if(map.has(diff)) {
Let diffIndex = map.get(arr[j]);
if( diffIndex !== j ) {
return [diffIndex , j]
}
}
}

}

Return [-1,-1]
}




—--
# Problem 2

You are given a String S of length N consisting of letters ‘a’ and ‘b’ only. In one move you can replace letters ‘a’ with ‘b’ or vice versa.

A good string is defined as a string which does not contain 3 consecutive a’s or 3 consecutive b’s anywhere in the string.
Example of a good/bad strings:
Good String: “bbaabbababa”
Bad String: “bbbaabbaaaabb”
Bad String: aaaaaa

Given a string S, convert the string such that it does not contain 3 consecutive a’s or 3 consecutive b’s.
Return the minimum number of moves required to obtain a good string from a bad string.
If the string S is already a good string, return 0.

Sample input:
Input S = “baaaaab”
Output: 1 
Explanation: We can Swap “a” at index 3 with a “b”.

Baaaaab -> bbaaaab -> bbaaabb-> bbababb

Baaaaab -> Baabaab

Baaabb

aabaa

{
	A:0,
b:0
}

//ct[st[i]]++
For

St[i] === st[i+1]  ct[st[i]]++  ctA = 1 ctA=2

St[i] !== st[i+1]  ct[st[i]] = 0 ctb = 0

Ct[st[i]] === 2 ]
	Repvar = a? b:a
st.replace(st[i+1], Repvar )
Swap++
ct[st[i]=0
