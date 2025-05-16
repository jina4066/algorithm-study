def dfs(v):
    visited[v] = 1
    for i in range(1, N+1):
        if graph[v][i] == 1 and visited[i] == 0:
            dfs(i)

N, M = map(int, input().split())

count = 0
graph = [[0] * (N+1) for _ in range(N+1)]
visited = [0] * (N+1)

for i in range(M):
    a, b = map(int, input(). split())
    graph[a][b] = graph[b][a] = 1

for i in range(1, N+1):
    if visited[i] == 0:
        dfs(i)
        count += 1

print(count)