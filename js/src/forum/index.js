import app from 'flarum/forum/app';
import { extend } from 'flarum/common/extend';
import DiscussionListItem from 'flarum/common/components/DiscussionListItem';

app.initializers.add('justoverclock/discussion-info', () => {
    extend(DiscussionListItem.prototype, 'infoItems', function (items) {
        const discussion = this.attrs.discussion;
        items.add(
            'replyCount',
            m('div', { className: 'replyCountBox' }, [
                m('i', { className: 'fas fa-users icontext' }),
                  m('strong', app.translator.trans('justoverclock-discussion-info.forum.participantCount') + ': '),
                discussion.data.attributes.participantCount,
                m('i', { className: 'fas fa-clock icontext' }),
                  m('strong', app.translator.trans('justoverclock-discussion-info.forum.createdAt') + ': '),
                discussion.data.attributes.createdAt.slice(0, 10),
            ])
        );
    });
});
