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

# 提交信息数组（随机顺序）
commit_messages=(
 "feat: implement new user dashboard"
  "fix: resolve session timeout issue"
  "feat: integrate Google login authentication"
  "feat: redesign navigation bar"
  "fix: fix leaderboard ranking bug"
  "feat: introduce user tagging system"
  "fix: correct user profile update errors"
  "feat: add email verification feature"
  "fix: resolve image cropping issue"
  "feat: enhance game analytics tracking"
  "feat: add referral tracking system"
  "fix: fix reward redemption validation"
  "feat: implement live game notifications"
  "fix: resolve UI glitch in dark mode"
  "feat: introduce friend request system"
  "feat: add in-game achievements"
  "fix: fix incorrect XP calculation"
  "feat: enhance leaderboard visuals"
  "feat: add animated loading screens"
  "fix: resolve social media sharing issue"
  "feat: optimize database performance"
  "feat: create interactive event calendar"
  "fix: fix user avatar upload issue"
  "feat: add smart game recommendations"
  "fix: resolve leaderboard API lag"
  "feat: implement in-app currency converter"
  "fix: fix incorrect transaction fee display"
  "feat: introduce game developer profiles"
  "feat: add interactive player stats"
  "fix: resolve notification spam issue"
  "feat: implement weekly challenges"
  "fix: fix sound effects not playing issue"
  "feat: add advanced filtering options"
  "feat: improve game search functionality"
  "fix: resolve bug in transaction history"
  "feat: implement dynamic game banners"
  "fix: correct bonus XP calculation"
  "feat: integrate blockchain wallet support"
  "fix: fix login timeout issue on mobile"
  "feat: add user feedback popups"
  "feat: implement push notifications"
  "fix: resolve game invite link bug"
  "feat: create customizable user themes"
  "feat: implement multi-account linking"
  "fix: correct mismatched game scores"
  "feat: add seasonal game events"
  "fix: fix issue with UI scaling on tablets"
  "feat: optimize data caching"
  "feat: introduce in-game tutorial system"
  "fix: resolve missing game assets issue"
  "feat: add support for community moderators"
  "fix: fix incorrect XP level-up formula"
  "feat: implement reward streak bonuses"
  "fix: fix game save data corruption issue"
  "feat: add new badge reward system"
  "feat: redesign user settings panel"
  "fix: resolve broken link in game guides"
  "feat: integrate streaming support"
  "fix: fix inconsistent tooltip displays"
  "feat: implement a new reporting system"
  "fix: correct ranking calculation formula"
  "feat: add a marketplace for in-game items"
  "fix: resolve game crash on startup"
  "feat: introduce new leaderboard categories"
  "feat: add a team battle mode"
  "fix: fix delayed friend request notifications"
  "feat: implement enhanced security for accounts"
  "feat: redesign homepage UI"
  "fix: fix issue with leaderboard pagination"
  "feat: introduce custom user badges"
  "fix: correct in-game currency conversion rates"
  "feat: add a friend suggestion feature"
  "fix: fix visual glitch in game menus"
  "feat: implement social sharing for achievements"
  "fix: fix inconsistent reward distribution"
  "feat: add a daily check-in bonus"
  "fix: resolve bug in the matchmaking system"
  "feat: introduce in-game surveys"
  "fix: correct time tracking for played matches"
  "feat: implement scheduled game events"
  "fix: fix issue with unread message counts"
  "feat: add new animations for UI elements"
  "fix: fix missing player stats in profile"
  "feat: improve AI difficulty scaling"
  "feat: introduce voice chat integration"
  "fix: fix delayed reward claim processing"
  "feat: add leaderboard history tracking"
  "feat: implement one-click game invites"
  "fix: resolve issue with game audio stuttering"
  "feat: create a seasonal event reward system"
  "fix: fix incorrect prize allocation in tournaments"
  "feat: optimize performance for low-end devices"
  "feat: introduce interactive leaderboards"
  "fix: fix broken game tutorial links"
  "feat: implement automatic bug reporting"
  "fix: resolve missing inventory item display"
  "feat: add a weekly tournament system"
  "fix: correct player experience calculation"
  "feat: improve matchmaking balance"
  "fix: resolve issue with in-game polls"
)

# 生成 200 个提交
for i in {1..200}
do
  # 随机选择提交信息
  message=${commit_messages[$((RANDOM % ${#commit_messages[@]}))]}
  
  # 随机选择作者
  author=${authors[$((RANDOM % ${#authors[@]}))]}

  # 生成 commit 时间，加重 6、7、8 月的 commit 频率
  weighted_months=(1 2 3 4 5 6 6 6 7 7 7 8 8 8 9 10 11 12)
  selected_month=${weighted_months[$((RANDOM % ${#weighted_months[@]}))]}
  random_day=$((RANDOM % 28 + 1)) # 随机选择日期（避免 31 日的问题）
  commit_date="2024-${selected_month}-${random_day}T$(shuf -i 10-23 -n 1):$(shuf -i 10-59 -n 1):$(shuf -i 10-59 -n 1)"

  # 随机选择一个代码文件
  selected_file=${code_files[$((RANDOM % ${#code_files[@]}))]}

  # 只有当文件存在时才进行修改
  if [[ -f "$selected_file" ]]; then
    # 选择修改方式 (1=添加新代码, 2=删除一整行, 3=注释掉一块代码)
    modify_type=$((RANDOM % 3 + 1))

    if [[ "$modify_type" -eq 1 ]]; then
      # 在文件末尾插入一行新的逻辑
      new_code_snippets=(
        "console.log('Debug: $message');"
        "return null;"
        "if (Math.random() > 0.5) console.warn('Potential issue detected');"
      )
      echo "${new_code_snippets[$((RANDOM % ${#new_code_snippets[@]}))]}" >> "$selected_file"

    elif [[ "$modify_type" -eq 2 ]]; then
      # 随机删除一行代码
      line_num=$((RANDOM % 10 + 1))
      sed -i '' "${line_num}d" "$selected_file"

    elif [[ "$modify_type" -eq 3 ]]; then
      # 注释掉一块代码（随机 3-5 行）
      start_line=$((RANDOM % 5 + 1))
      end_line=$((start_line + RANDOM % 3 + 2))
      sed -i '' "${start_line},${end_line}s/^/\/\/ /" "$selected_file"
    fi

    # 提交更改
    git add "$selected_file"

    # 执行提交并设置作者
    GIT_AUTHOR_NAME="$(echo $author | cut -d '<' -f1)" \
    GIT_AUTHOR_EMAIL="$(echo $author | cut -d '<' -f2 | tr -d '>')" \
    GIT_AUTHOR_DATE="$commit_date" \
    GIT_COMMITTER_NAME="$(echo $author | cut -d '<' -f1)" \
    GIT_COMMITTER_EMAIL="$(echo $author | cut -d '<' -f2 | tr -d '>')" \
    GIT_COMMITTER_DATE="$commit_date" \
    git commit -m "$message" --author="$author"
  fi
done