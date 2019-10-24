def removeOuterParentheses(self, S):
        """
        :type S: str
        :rtype: str
        """
        output = []
        stack = 0
        start = None
        for i, char in enumerate(S):
            if char == "(":
                if start == None:
                    start = i
                stack += 1
            elif char == ")":
                stack -= 1
                if not stack:
                    output.append(S[start + 1:i])
                    start = None
        
        return "".join(output)