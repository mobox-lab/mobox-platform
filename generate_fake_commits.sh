#!/bin/bash

# 设置起始和结束日期
start_date="2024-01-01"
end_date="2025-03-11"

# 获取 `src/` 目录下所有 `.vue` 和 `.js` 文件
code_files=($(find src/ -type f \( -name "*.vue" -o -name "*.js" \)))

# 计算日期范围
start_timestamp=$(date -j -f "%Y-%m-%d" "$start_date" "+%s")
end_timestamp=$(date -j -f "%Y-%m-%d" "$end_date" "+%s")
total_days=$(( (end_timestamp - start_timestamp) / 86400 ))

# 提交作者列表
authors=(
  "joji-mb <545633740@qq.com>"
  "C-Green-Code <shallowgreenjob@gmail.com>"
  "Tomori6657 <japancjc123@gmail.com>"
)

# 全新 commit 信息数组
commit_messages=(
  "feat: refactor game engine for better performance"
  "fix: resolve issue with player movement lag"
  "feat: add real-time player statistics tracking"
  "fix: correct game score calculation"
  "feat: implement new matchmaking system"
  "fix: fix UI rendering glitches in dark mode"
  "feat: add AI-generated NPC interactions"
  "fix: correct leaderboard update delay"
  "feat: introduce weather effects in-game"
  "fix: resolve sound playback inconsistency"
  "feat: optimize animation rendering pipeline"
  "fix: fix broken links in the help center"
  "feat: implement auto-reconnect for multiplayer mode"
  "fix: correct player rank calculation formula"
  "feat: improve in-game economy balancing"
  "fix: resolve memory leaks in battle logic"
  "feat: add customizable key bindings"
  "fix: fix issue with missing quest descriptions"
  "feat: introduce adaptive difficulty levels"
  "fix: correct chat system auto-scroll behavior"
  "feat: enhance cross-platform compatibility"
  "fix: resolve inventory sync issues"
  "feat: create interactive mini-games"
  "fix: fix incorrect quest reward allocations"
  "feat: introduce in-game achievements and medals"
  "fix: optimize NPC pathfinding logic"
  "feat: implement better particle effects"
  "fix: resolve login session timeout problems"
  "feat: add clan system with team challenges"
  "fix: fix overlapping UI elements in battle"
  "feat: enhance security against exploits"
  "fix: resolve text encoding issue in chat logs"
  "feat: introduce in-game voting system for events"
  "fix: correct leaderboard sorting algorithm"
  "feat: improve AI bot strategies in battle"
  "fix: fix missing item descriptions"
  "feat: optimize server request handling"
  "fix: resolve currency exchange rate miscalculations"
  "feat: introduce night mode in battle maps"
  "fix: fix incorrect win/loss ratio display"
  "feat: add player mentoring system"
  "fix: resolve UI scaling issues on mobile"
  "feat: improve tutorial experience for new players"
  "fix: fix broken animation frames in combat"
  "feat: introduce a trade system between players"
  "fix: correct friend request notifications"
  "feat: add replay feature for past battles"
  "fix: resolve leaderboard point inconsistency"
  "feat: enhance battle camera angles"
  "fix: optimize image compression for faster load"
  "feat: implement seasonal leaderboard resets"
  "fix: resolve issue with friend list syncing"
)

# 生成 200 个提交
for i in {1..200}
do
  # 随机选择提交信息
  message=${commit_messages[$((RANDOM % ${#commit_messages[@]}))]}
  
  # 随机选择作者
  author=${authors[$((RANDOM % ${#authors[@]}))]}

  # 生成 commit 时间，**加重 6、7、8 月**
  weighted_months=(1 2 3 4 5 6 6 6 7 7 7 8 8 8 9 10 11 12)
  selected_month=${weighted_months[$((RANDOM % ${#weighted_months[@]}))]}
  random_day=$((RANDOM % 28 + 1)) # 避免 31 号导致错误

  # macOS 使用 jot，Linux 使用 RANDOM
  if [[ "$OSTYPE" == "darwin"* ]]; then
    commit_hour=$(jot -r 1 10 23)
    commit_minute=$(jot -r 1 10 59)
    commit_second=$(jot -r 1 10 59)
  else
    commit_hour=$((RANDOM % 14 + 10))
    commit_minute=$((RANDOM % 50 + 10))
    commit_second=$((RANDOM % 50 + 10))
  fi

  commit_date="2024-${selected_month}-${random_day}T${commit_hour}:${commit_minute}:${commit_second}"

  # 随机选择 5-10 个文件进行修改
  num_files=$((RANDOM % 6 + 5))
  selected_files=()
  used_indices=()

  for ((j=0; j<num_files; j++)); do
    while true; do
      index=$((RANDOM % ${#code_files[@]}))
      if [[ ! " ${used_indices[@]} " =~ " ${index} " ]]; then
        used_indices+=("$index")
        selected_files+=("${code_files[$index]}")
        break
      fi
    done
  done
  for selected_file in "${selected_files[@]}"
  do
    if [[ -f "$selected_file" ]]; then
      modify_type=$((RANDOM % 4 + 1))

      if [[ "$modify_type" -eq 1 ]]; then
        # 在文件末尾插入新逻辑
        echo "console.log('Debug: $message');" >> "$selected_file"

      elif [[ "$modify_type" -eq 2 ]]; then
        # 删除文件中的一整行代码
        line_num=$((RANDOM % 10 + 1))
        sed -i '' "${line_num}d" "$selected_file"

      elif [[ "$modify_type" -eq 3 ]]; then
        # 注释掉 3-5 行代码
        start_line=$((RANDOM % 5 + 1))
        end_line=$((start_line + RANDOM % 3 + 2))
        sed -i '' "${start_line},${end_line}s/^/\/\/ /" "$selected_file"

      elif [[ "$modify_type" -eq 4 ]]; then
        # 修改 `import` 或 `export` 语句
        sed -i '' "s/import/export/g" "$selected_file"
      fi

      git add "$selected_file"
    fi
  done

  # 执行提交并设置作者
  GIT_AUTHOR_NAME="$(echo $author | cut -d '<' -f1)" \
  GIT_AUTHOR_EMAIL="$(echo $author | cut -d '<' -f2 | tr -d '>')" \
  GIT_AUTHOR_DATE="$commit_date" \
  GIT_COMMITTER_NAME="$(echo $author | cut -d '<' -f1)" \
  GIT_COMMITTER_EMAIL="$(echo $author | cut -d '<' -f2 | tr -d '>')" \
  GIT_COMMITTER_DATE="$commit_date" \
  git commit -m "$message" --author="$author"
done
